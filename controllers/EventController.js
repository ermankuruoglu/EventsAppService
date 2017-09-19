import Event from '../models/event';

export const index = (req, res, next) => {
  // Find all events and return json response
  Event.find().lean().exec((err, events) => res.json(
    // Iterate through each event
    { events: events.map(event => ({
      ...event,
    }))}
  ));
};
