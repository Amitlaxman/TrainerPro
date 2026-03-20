'use server';
/**
 * @fileOverview A Genkit flow for summarizing long training documents.
 *
 * - documentSummarizer - A function that handles the document summarization process.
 * - DocumentSummarizerInput - The input type for the documentSummarizer function.
 * - DocumentSummarizerOutput - The return type for the documentSummarizer function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DocumentSummarizerInputSchema = z.object({
  documentContent: z
    .string()
    .describe('The content of the training document to be summarized.'),
});
export type DocumentSummarizerInput = z.infer<typeof DocumentSummarizerInputSchema>;

const DocumentSummarizerOutputSchema = z.object({
  summary: z.string().describe('A concise summary of the training document.'),
});
export type DocumentSummarizerOutput = z.infer<typeof DocumentSummarizerOutputSchema>;

export async function documentSummarizer(
  input: DocumentSummarizerInput
): Promise<DocumentSummarizerOutput> {
  return documentSummarizerFlow(input);
}

const prompt = ai.definePrompt({
  name: 'documentSummarizerPrompt',
  input: { schema: DocumentSummarizerInputSchema },
  output: { schema: DocumentSummarizerOutputSchema },
  prompt: `You are an AI assistant specialized in summarizing educational and training documents.
Your task is to provide a concise and accurate summary of the provided training document.
The summary should capture the core content, main points, and key takeaways, allowing a trainer to quickly grasp the essence of the material.
Ensure the summary is easy to read and understand.

Training Document:
{{{documentContent}}}`,
});

const documentSummarizerFlow = ai.defineFlow(
  {
    name: 'documentSummarizerFlow',
    inputSchema: DocumentSummarizerInputSchema,
    outputSchema: DocumentSummarizerOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
