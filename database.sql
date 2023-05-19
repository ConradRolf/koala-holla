CREATE TABLE "Koala_Bears" (
"id" serial primary key,
"name" varchar (80) not null,
"age" integer, 
"gender" varchar (10) not null, 
"ready_for_transfer" varchar (10) not null, 
"notes" varchar (120));


INSERT INTO "Koala_Bears" ("name", "age", "gender", "ready_for_transfer", "notes") 
VALUES ('Scotty', '4', 'M', 'True', 'Born in Guatemala'),
('Jean', '5', 'F', 'True', 'Allergic to lots of lava'),
('Ororo', '7', 'F', 'False', 'Loves listening to Paula (Abdul)'),
('Logan', '15', 'M', 'False', 'Loves the sauna'),
('Charlie', '9', 'M', 'True', 'Favorite band is Nirvana'),
('Betsy', '4', 'F', 'True', 'Has a pet iguana');
