export class LoginModel {
  Username?: string;
  Password?: string;
}

export class SignInModel {
  Username?: string;
  EmailID?: string;
  Password?: string;
}

export class moviesModel {
  movieID?: number;
  releaseDate?: number;
  title?: string;
  description?: string;
  posterURL?: string;
  ratings?: string;
}

export class ShowModal {
  showID?: number;
  movieID?: number;
  theaterID?: number;
  seats?: string;
  date?: Date;
  slot?: string;
  cost?: number;
}

export class MyModel {
  userID?: number;
  userName?: string;
  email?: string;
  password?: string;
  balance?: number;
}

export class TicketModel {
  ticketID?: number;
  movieID?: number;
  showID?: number;
  userID?: number;
  count?: number;
  seats?: string;
}

// public int ticketID { get; set; }
// public int movieID { get; set; }

// public int showID { get; set; }
// public int userID { get; set; }
// public int count { get; set; }

// public string seats { get; set; }
