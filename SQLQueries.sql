CREATE TABLE redthings (
	id serial PRIMARY KEY,
	thing VARCHAR (30)
	);
CREATE TABLE bluethings (
	id serial PRIMARY KEY,
	thing VARCHAR (30)
	);
	
INSERT INTO bluethings (thing) VALUES 
		('Blueberries'),
        ('Blue Whales'),
        ('Blue Birds'),
        ('Blue Jay'),
        ('The Blues'),
        ('Smurfs')
;

INSERT INTO redthings (thing) VALUES 
        ('Tomato'),
        ('Apple'),
        ('Cherry'),
        ('Bloody'),
        ('Fire')
;
