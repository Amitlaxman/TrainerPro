"use client"

import { useState } from "react";
import { Sparkles, FileText, ListChecks, Loader2, Send, Wand2, Copy, Download } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { documentSummarizer } from "@/ai/flows/document-summarizer-flow";
import { quizQuestionGenerator, QuizQuestionGeneratorOutput } from "@/ai/flows/quiz-question-generator";

export default function AITools() {
  const { toast } = useToast();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState("");
  const [quiz, setQuiz] = useState<QuizQuestionGeneratorOutput | null>(null);

  const handleSummarize = async () => {
    if (!content.trim()) return;
    setLoading(true);
    try {
      const result = await documentSummarizer({ documentContent: content });
      setSummary(result.summary);
      toast({ title: "Summary generated!", description: "Content has been condensed successfully." });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to generate summary." });
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateQuiz = async () => {
    if (!content.trim()) return;
    setLoading(true);
    try {
      const result = await quizQuestionGenerator({ trainingMaterial: content });
      setQuiz(result);
      toast({ title: "Quiz generated!", description: "AI has created targeted questions." });
    } catch (error) {
      toast({ variant: "destructive", title: "Error", description: "Failed to generate quiz." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-8 max-w-5xl mx-auto">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 rounded-lg bg-accent/20">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>
          <h1 className="text-3xl font-headline text-white">AI Training Content Tool</h1>
        </div>
        <p className="text-muted-foreground">Summarize documents or generate quizzes instantly using advanced AI.</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-card/50 border-none">
          <CardHeader>
            <CardTitle className="text-lg">Input Training Material</CardTitle>
            <CardDescription>Paste long training text or document content below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea 
              placeholder="Paste training material content here... (e.g. Health & Safety protocols, Security Guidelines)"
              className="min-h-[200px] bg-secondary border-none resize-none focus-visible:ring-accent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            <div className="flex gap-3">
              <Button 
                onClick={handleSummarize} 
                disabled={loading || !content} 
                className="bg-primary hover:bg-primary/90 flex-1"
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <FileText className="w-4 h-4 mr-2" />}
                Generate Summary
              </Button>
              <Button 
                onClick={handleGenerateQuiz} 
                disabled={loading || !content} 
                className="bg-accent hover:bg-accent/90 text-white flex-1"
              >
                {loading ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <ListChecks className="w-4 h-4 mr-2" />}
                Generate Quiz
              </Button>
            </div>
          </CardContent>
        </Card>

        {(summary || quiz) && (
          <Card className="bg-card/50 border-none overflow-hidden">
            <Tabs defaultValue={summary ? "summary" : "quiz"} className="w-full">
              <div className="px-6 pt-6 border-b border-white/5 flex items-center justify-between">
                <TabsList className="bg-transparent border-none">
                  <TabsTrigger value="summary" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 border-primary rounded-none px-4 py-2">
                    AI Summary
                  </TabsTrigger>
                  <TabsTrigger value="quiz" className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-accent data-[state=active]:border-b-2 border-accent rounded-none px-4 py-2">
                    AI Generated Quiz
                  </TabsTrigger>
                </TabsList>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Copy className="w-4 h-4" /></Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8"><Download className="w-4 h-4" /></Button>
                </div>
              </div>

              <TabsContent value="summary" className="p-6 focus-visible:ring-0">
                {summary ? (
                  <div className="prose prose-invert max-w-none">
                    <div className="p-6 rounded-xl bg-white/5 whitespace-pre-wrap text-foreground leading-relaxed">
                      {summary}
                    </div>
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center text-muted-foreground italic">
                    Click "Generate Summary" to view results.
                  </div>
                )}
              </TabsContent>

              <TabsContent value="quiz" className="p-6 focus-visible:ring-0">
                {quiz ? (
                  <div className="space-y-6">
                    {quiz.questions.map((q, i) => (
                      <div key={i} className="p-6 rounded-xl bg-white/5 border border-white/5">
                        <div className="flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-accent/20 text-accent flex items-center justify-center text-xs font-bold shrink-0">
                            {i + 1}
                          </span>
                          <div className="space-y-4 w-full">
                            <p className="font-semibold text-white">{q.questionText}</p>
                            {q.type === 'multiple-choice' && (
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {q.options.map((opt, idx) => (
                                  <div key={idx} className={`p-3 rounded-lg text-sm border ${
                                    opt === q.correctAnswer ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500' : 'bg-white/5 border-transparent text-muted-foreground'
                                  }`}>
                                    {opt}
                                  </div>
                                ))}
                              </div>
                            )}
                            {q.type === 'short-answer' && (
                              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-sm">
                                <span className="text-emerald-500 font-bold mr-2">Correct Answer:</span>
                                <span className="text-emerald-500/80">{q.correctAnswer}</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="h-40 flex items-center justify-center text-muted-foreground italic">
                    Click "Generate Quiz" to view results.
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>
    </div>
  );
}
