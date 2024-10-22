import { z } from 'zod';

const CoffeeSchema = z.object({
  id: z.number(),
  title: z.string(),
  desc: z.string(),
  reason: z.string(),
  authorName: z.string(),
  url: z.string(),
});

export default CoffeeSchema
