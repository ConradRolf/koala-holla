CREATE TABLE "Koala_Bears" (
"id" serial primary key,
"name" varchar (80) not null,
"age" integer, 
"gender" varchar (10) not null, 
"ready for transfer" varchar (10) not null, 
"notes" varchar (120));


INSERT INTO "Koala_Bears" ("name", "age", "gender", "ready for transfer", "notes") 
VALUES ('Scotty', '4', 'M', 'Y', 'Born in Guatemala'),
('Jean', '5', 'F', 'Y', 'Allergic to lots of lava'),
('Ororo', '7', 'F', 'N', 'Loves listening to Paula (Abdul)'),
('Logan', '15', 'M', 'N', 'Loves the sauna'),
('Charlie', '9', 'M', 'Y', 'Favorite band is Nirvana'),
('Betsy', '4', 'F', 'Y', 'Has a pet iguana');
