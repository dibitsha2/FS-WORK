import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const AddReviewForm = () => {
    const { toast } = useToast();
    const [quote, setQuote] = useState("");
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would typically send the data to a server
        // For now, we'll just show a toast notification
        toast({
            title: "Review Submitted!",
            description: "Thank you for your feedback.",
        });
        // and clear the form
        setQuote("");
        setName("");
        setTitle("");
    };

    return (
        <div className="py-20 bg-luxury-dark text-white">
            <div className="container mx-auto">
                <Card className="bg-transparent border-gray-700">
                    <CardHeader>
                        <CardTitle className="text-4xl font-bold text-center mb-12">
                            Leave a Review
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                            <Textarea
                                placeholder="Write your review here..."
                                value={quote}
                                onChange={(e) => setQuote(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                            <Input
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                            <Input
                                type="text"
                                placeholder="Your Company/Title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                className="bg-gray-800 border-gray-700 text-white"
                                required
                            />
                            <Button type="submit" variant="luxury" size="lg">
                                Submit Review
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default AddReviewForm;
