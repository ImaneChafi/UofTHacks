/* create the tables */
createclasses =
  "CREATE TABLE IF NOT EXISTS classes (id INT PRIMARY KEY, offeredby TINYTEXT NOT NULL, name TINYTEXT NOT NULL)";
createusers =
  "CREATE TABLE IF NOT EXISTS users (id INT PRIMARY KEY, username TINYTEXT NOT NULL, Password BINARY(64) NOT NULL, First TINYTEXT, Last TINYNEXT)";
createregistration =
  "CREATE TABLE IF NOT EXISTS registration (id INT PRIMARY KEY, user TINYTEXT NOT NULL, course INT NOT NULL)";
createposts =
  "CREATE TABLE IF NOT EXISTS posts (id INT PRIMARY KEY, author INT NOT NULL, message INT NOT NULL, likes INT DEFAULT 0, comments INT NOT NULL)";
createmessages =
  "CREATE TABLE IT NOT EXISTS messages (id INT PRIMARY KEY, author INT NOT NULL, text MEDIUMTEXT NOT NULL, date DATETIME NOT NULL)";
createthreads =
  "CREATE TABLE IF NOT EXIST threads (id INT PRIMARY KEY, course INT NOT NULL, primarymessage INT NOT NULL)";
createthreadreplies =
  "CREATE TABLE IF NOT EXIST threadreplies (id INT PRIMARY KEY, primarymessage INT NOT NULL, reply INT NOT NULL)";

/* find all courses offered by the school */
absallcourses =
  "SELECT * FROM classes WHERE offeredby=?"; /* ?=String school name */

/* find all courses that a user is taking */
userallcourses =
  "SELECT course FROM registration WHERE user=?"; /* ?=int user pk */

/* match all users to the threads they follow; find all courses using above query^ then find all threads based on those course ids */
userallthreads = "SELECT * FROM threads WHERE course=?";

/* find the initial message in the thread */
threadprimarymessage = "SELECT text FROM messages WHERE id=?";

/*find all if the replies to a thread */
threadreplies =
  "SELECT * from threadreplies WHERE primarymessage=?"; /* ? is the id of the primary message in the thread */
/* all replies are stored in the messages table, then the threadreplies table will reference all of the replies */
/* e.g. thread #2 will have as primary message: message #4 */
/* the replies to the thread will be messages #5,6,10,21,35, all of which reference message $4 as the primarymessage */
