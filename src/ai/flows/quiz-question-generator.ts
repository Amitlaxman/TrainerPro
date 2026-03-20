'use server';
/**
 * @fileOverview A GenAI tool to generate quiz questions from training material.
 *
 * - quizQuestionGenerator - A function that handles the generation of quiz questions.
 * - QuizQuestionGeneratorInput - The input type for the quizQuestionGenerator function.
 * - QuizQuestionGeneratorOutput - The return type for the quizQuestionGenerator function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Input Schema
const QuizQuestionGeneratorInputSchema = z.object({
  trainingMaterial: z.string().describe('The training material (text document) from which to generate quiz questions.'),
});
export type QuizQuestionGeneratorInput = z.infer<typeof QuizQuestionGeneratorInputSchema>;

// Output Schema
const MultipleChoiceQuestionSchema = z.object({
  type: z.literal('multiple-choice').describe('The type of the question.'),
  questionText: z.string().describe('The text of the multiple choice question.'),
  options: z.array(z.string()).describe('An array of possible answers for the multiple choice question.'),
  correctAnswer: z.string().describe('The correct answer among the options.'),
});

const ShortAnswerQuestionSchema = z.object({
  type: z.literal('short-answer').describe('The type of the question.'),
  questionText: z.string().describe('The text of the short answer question.'),
  correctAnswer: z.string().describe('The expected correct answer for the short answer question.'),
});

const QuizQuestionSchema = z.discriminatedUnion('type', [
  MultipleChoiceQuestionSchema,
  ShortAnswerQuestionSchema,
]);

const QuizQuestionGeneratorOutputSchema = z.object({
  questions: z.array(QuizQuestionSchema).describe('An array of generated quiz questions.'),
});
export type QuizQuestionGeneratorOutput = z.infer<typeof QuizQuestionGeneratorOutputSchema>;

export async function quizQuestionGenerator(input: QuizQuestionGeneratorInput): Promise<QuizQuestionGeneratorOutput> {
  return quizQuestionGeneratorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'quizQuestionGeneratorPrompt',
  input: {schema: QuizQuestionGeneratorInputSchema},
  output: {schema: QuizQuestionGeneratorOutputSchema},
  prompt: `You are an AI assistant specialized in generating quiz questions from provided training materials.
Your task is to create a set of diverse quiz questions, including both multiple-choice and short-answer questions, based on the given training material.

For multiple-choice questions, provide 4 options and clearly indicate the correct answer.
For short-answer questions, provide the expected correct answer.

Ensure the questions cover important concepts and details from the training material.
The output should be a JSON object containing an array of questions, adhering to the following JSON schema:

\`\`\`json
{{{output.schema}}}
\`\`\`

Here is the training material:

Training Material:
{{{trainingMaterial}}}`,
});

const quizQuestionGeneratorFlow = ai.defineFlow(
  {
    name: 'quizQuestionGeneratorFlow',
    inputSchema: QuizQuestionGeneratorInputSchema,
    outputSchema: QuizQuestionGeneratorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);