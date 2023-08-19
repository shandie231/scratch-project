const ShowSchema = require("./ShowModel");

const ShowController = {
  // Create a new show in the Database
  async createShow(req, res, next) {
    try {
      const { showName, score, genre, adult, runTime, monetization } = req.body;
      const newShow = new ShowSchema({
        showName,
        score,
        genre,
        adult,
        runTime,
        monetization,
      });
      const savedShow = await newShow.save();
      // Store the saved show data in the response locals obj
      res.locals.show = savedShow;
      // Continue to the next middleware
      next();
    } catch (error) {
      // Pass the error to the global error handler
      res.status(400).json({ error: "Error making show" });
      next(error);
    }
  },
  async getGenre(req, res, next) {
    try {
      const { id } = req.body;
      const 
    } catch(error) {

    }
  },
  // Get a show from the database and send it in the response
  async getShow(req, res, next) {
    try {
      req.params = { score, genre, adult, runTime, monetization };
      const showName = req.parms;
      const show = await ShowSchema.findOne({ showName: showName });

      res.locals.show = show;
      next();
    } catch (error) {
      res.status(400).json({ error: "Error getting show" });
      next(error);
    }
  },
  async createSUggestion(req, res, next) {},
};
