import { dbContext } from "../db/DbContext.js";

class RatsService {
  async getRats() {
    const rats = await dbContext.Rats.find()
  }
}
export const ratsService = new RatsService()
