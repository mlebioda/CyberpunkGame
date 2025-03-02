CREATE TABLE SessionUsers (
  session_id INT NOT NULL,
  user_id INT NOT NULL,
  PRIMARY KEY (session_id, user_id),
  FOREIGN KEY (session_id) REFERENCES Session(id) ON DELETE CASCADE,
  FOREIGN KEY (user_id) REFERENCES Users(id) ON DELETE CASCADE,
  CONSTRAINT session_user_limit CHECK (
    (SELECT COUNT(*) FROM SessionUsers WHERE session_id = NEW.session_id) <= 6
  )
);
