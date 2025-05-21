import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  type: z.string().min(1),
  message: z.string().min(10)
});

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, this would store the contact form submission
      // or send an email. For this demo, we'll just return success.
      
      console.log("Contact form submission:", validatedData);
      
      return res.status(200).json({ 
        message: "Mensagem recebida com sucesso!" 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Dados inválidos", 
          errors: error.errors 
        });
      }
      
      return res.status(500).json({ 
        message: "Erro ao processar a mensagem" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
