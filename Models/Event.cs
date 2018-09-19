

using System;

namespace project.Models
{
    public class Event
    {
        private long Id { get; set; }
        private DateTime EventDate { get; set; }
        private DateTime EventTime { get; set; }
        private string EventName { get; set; }
        private string Params { get; set; }
    }
}