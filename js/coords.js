
var vertices = [

		// CAR BACK
		-0.20, -0.10,  0.25,
		 0.20, -0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20, -0.10,  0.25,
		
		// CAR TOP
		-0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10, -0.45,
		 0.20,  0.10, -0.45,
		-0.20,  0.10, -0.45,
		-0.20,  0.10,  0.25,

		// WHEEL 1
		 0.20, -0.10,  0.15,
		 0.25, -0.10,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.15,

		 0.20,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.00,
		 0.20,  0.05,  0.00,
		 0.20,  0.05,  0.15,
		
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.00,
		 0.20, -0.10,  0.15,
		 0.20,  0.05,  0.15,
		 0.20,  0.05,  0.00,
		 0.20, -0.10,  0.00,
		
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.00, 
		 0.25, -0.10,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.15,

		// WHEEL 2
		 0.20, -0.10, -0.20,
		 0.25, -0.10, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.20,

		 0.20,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.35,
		 0.20,  0.05, -0.35,
		 0.20,  0.05, -0.20,
		
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.35,
		 0.20, -0.10, -0.20,
		 0.20,  0.05, -0.20,
		 0.20,  0.05, -0.35,
		 0.20, -0.10, -0.35,
		
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.35, 
		 0.25, -0.10, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.20,

		// WHEEL 3
		-0.25, -0.10,  0.15,
		-0.20, -0.10,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.15,

		-0.25,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.00,
		-0.25,  0.05,  0.00,
		-0.25,  0.05,  0.15,
	
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.00,
		-0.25, -0.10,  0.15,
		-0.25,  0.05,  0.15,
		-0.25,  0.05,  0.00,
		-0.25, -0.10,  0.00,
		
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.00, 
		-0.20, -0.10,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.15,

		// WHEEL 4
		-0.25, -0.10, -0.20,
		-0.20, -0.10, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.20,

		-0.25,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.35,
		-0.25,  0.05, -0.35,
		-0.25,  0.05, -0.20,
		
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.35,
		-0.25, -0.10, -0.20,
		-0.25,  0.05, -0.20,
		-0.25,  0.05, -0.35,
		-0.25, -0.10, -0.35,
		
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.35, 
		-0.20, -0.10, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.20,

		// CAR LEFT
		-0.20,  0.10,  0.25,
		-0.20, -0.10, -0.45,
		-0.20, -0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20,  0.10, -0.45,
		-0.20, -0.10, -0.45,
		
		// CAR RIGHT
		 0.20,  0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10, -0.45, 
		 0.20, -0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10,  0.25,

		// STREET

		-1,  	0,     2.0,
		 1,  	0,     2.0,
		 1,  	0, 	  -10.0,	 
	 	 1,  	0,    -10.0,
		-1,  	0, 	  -10.0,	 
		-1,  	0,     2.0,

		// SIDEWALK
		-1.5,  	0.02,  2.0,
		-1.0,  	0.02,  2.0,
		-1.0,  	0.02, -10.0,	 
	 	-1.0,  	0.02, -10.0,
		-1.5,  	0.02, -10.0,	 
		-1.5,  	0.02,  2.0,

		-1.0, 	0.00,  2.0,
		-1.0, 	0.02,  2.0,
		-1.0, 	0.02, -10.0,	 
	 	-1.0, 	0.02, -10.0,
		-1.0, 	0.00, -10.0,	 
		-1.0, 	0.00,  2.0,

		 1.5,  	0.02,  2.0,
		 1.0,  	0.02,  2.0,
		 1.0,  	0.02, -10.0,	 
	 	 1.0,  	0.02, -10.0,
		 1.5,  	0.02, -10.0,	 
		 1.5,  	0.02,  2.0,

		 1.0, 	0.00,  2.0,
		 1.0, 	0.02,  2.0,
		 1.0, 	0.02, -10.0,	 
	 	 1.0, 	0.02, -10.0,
		 1.0, 	0.00, -10.0,	 
		 1.0, 	0.00,  2.0,

		// STREET LINES
		-0.0625,  0.000,  0.00,
		-0.0625,  0.000,  1.00,
		 0.0625,  0.000,  1.00,
		 0.0625,  0.000,  1.00,
		 0.0625,  0.000,  0.00,
		-0.0625,  0.000,  0.00,

		-0.0625,  0.000,  2.00,
		-0.0625,  0.000,  3.00,
		 0.0625,  0.000,  3.00,
		 0.0625,  0.000,  3.00,
		 0.0625,  0.000,  2.00,
		-0.0625,  0.000,  2.00,

		-0.0625,  0.000,  4.00,
		-0.0625,  0.000,  5.00,
		 0.0625,  0.000,  5.00,
		 0.0625,  0.000,  5.00,
		 0.0625,  0.000,  4.00,
		-0.0625,  0.000,  4.00,

		-0.0625,  0.000,  6.00,
		-0.0625,  0.000,  7.00,
		 0.0625,  0.000,  7.00,
		 0.0625,  0.000,  7.00,
		 0.0625,  0.000,  6.00,
		-0.0625,  0.000,  6.00,

		-0.0625,  0.000,  8.00,
		-0.0625,  0.000,  9.00,
		 0.0625,  0.000,  9.00,
		 0.0625,  0.000,  9.00,
		 0.0625,  0.000,  8.00,
		-0.0625,  0.000,  8.00,

		-0.0625,  0.000,  10.00,
		-0.0625,  0.000,  11.00,
		 0.0625,  0.000,  11.00,
		 0.0625,  0.000,  11.00,
		 0.0625,  0.000,  10.00,
		-0.0625,  0.000,  10.00,

		-0.0625,  0.000,  12.00,
		-0.0625,  0.000,  13.00,
		 0.0625,  0.000,  13.00,
		 0.0625,  0.000,  13.00,
		 0.0625,  0.000,  12.00,
		-0.0625,  0.000,  12.00,

		-0.0625,  0.000,  14.00,
		-0.0625,  0.000,  15.00,
		 0.0625,  0.000,  15.00,
		 0.0625,  0.000,  15.00,
		 0.0625,  0.000,  14.00,
		-0.0625,  0.000,  14.00,

		-0.0625,  0.000,  16.00,
		-0.0625,  0.000,  17.00,
		 0.0625,  0.000,  17.00,
		 0.0625,  0.000,  17.00,
		 0.0625,  0.000,  16.00,
		-0.0625,  0.000,  16.00,

		// CAR BACK
		-0.20, -0.10,  0.25,
		 0.20, -0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20, -0.10,  0.25,
		
		// CAR TOP
		-0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10, -0.45,
		 0.20,  0.10, -0.45,
		-0.20,  0.10, -0.45,
		-0.20,  0.10,  0.25,

		// WHEEL 1
		 0.20, -0.10,  0.15,
		 0.25, -0.10,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.15,

		 0.20,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.00,
		 0.20,  0.05,  0.00,
		 0.20,  0.05,  0.15,
		
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.00,
		 0.20, -0.10,  0.15,
		 0.20,  0.05,  0.15,
		 0.20,  0.05,  0.00,
		 0.20, -0.10,  0.00,
		
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.00, 
		 0.25, -0.10,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.15,

		// WHEEL 2
		 0.20, -0.10, -0.20,
		 0.25, -0.10, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.20,

		 0.20,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.35,
		 0.20,  0.05, -0.35,
		 0.20,  0.05, -0.20,
		
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.35,
		 0.20, -0.10, -0.20,
		 0.20,  0.05, -0.20,
		 0.20,  0.05, -0.35,
		 0.20, -0.10, -0.35,
		
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.35, 
		 0.25, -0.10, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.20,

		// WHEEL 3
		-0.25, -0.10, -0.20,
		-0.20, -0.10, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.20,

		-0.25,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.35,
		-0.25,  0.05, -0.35,
		-0.25,  0.05, -0.20,
		
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.35,
		-0.25, -0.10, -0.20,
		-0.25,  0.05, -0.20,
		-0.25,  0.05, -0.35,
		-0.25, -0.10, -0.35,
		
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.35, 
		-0.20, -0.10, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.20,

		// WHEEL 4
		-0.25, -0.10,  0.15,
		-0.20, -0.10,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.15,

		-0.25,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.00,
		-0.25,  0.05,  0.00,
		-0.25,  0.05,  0.15,
	
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.00,
		-0.25, -0.10,  0.15,
		-0.25,  0.05,  0.15,
		-0.25,  0.05,  0.00,
		-0.25, -0.10,  0.00,
		
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.00, 
		-0.20, -0.10,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.15,

		// CAR LEFT
		-0.20,  0.10,  0.25,
		-0.20, -0.10, -0.45,
		-0.20, -0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20,  0.10, -0.45,
		-0.20, -0.10, -0.45,
		
		// CAR RIGHT
		 0.20,  0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10, -0.45, 
		 0.20, -0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10,  0.25,

		// CAR BACK
		-0.20, -0.10,  0.25,
		 0.20, -0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20, -0.10,  0.25,
		
		// CAR TOP
		-0.20,  0.10,  0.25,
		 0.20,  0.10,  0.25,
		 0.20,  0.10, -0.45,
		 0.20,  0.10, -0.45,
		-0.20,  0.10, -0.45,
		-0.20,  0.10,  0.25,

		// WHEEL 1
		 0.20, -0.10,  0.15,
		 0.25, -0.10,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.15,

		 0.20,  0.05,  0.15,
		 0.25,  0.05,  0.15,
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.00,
		 0.20,  0.05,  0.00,
		 0.20,  0.05,  0.15,
		
		 0.20,  0.05,  0.15,
		 0.20, -0.10,  0.00,
		 0.20, -0.10,  0.15,
		 0.20,  0.05,  0.15,
		 0.20,  0.05,  0.00,
		 0.20, -0.10,  0.00,
		
		 0.25,  0.05,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.00, 
		 0.25, -0.10,  0.00,
		 0.25,  0.05,  0.15,
		 0.25, -0.10,  0.15,

		// WHEEL 2
		 0.20, -0.10, -0.20,
		 0.25, -0.10, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.20,

		 0.20,  0.05, -0.20,
		 0.25,  0.05, -0.20,
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.35,
		 0.20,  0.05, -0.35,
		 0.20,  0.05, -0.20,
		
		 0.20,  0.05, -0.20,
		 0.20, -0.10, -0.35,
		 0.20, -0.10, -0.20,
		 0.20,  0.05, -0.20,
		 0.20,  0.05, -0.35,
		 0.20, -0.10, -0.35,
		
		 0.25,  0.05, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.35, 
		 0.25, -0.10, -0.35,
		 0.25,  0.05, -0.20,
		 0.25, -0.10, -0.20,

		// WHEEL 3
		-0.25, -0.10, -0.20,
		-0.20, -0.10, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.20,

		-0.25,  0.05, -0.20,
		-0.20,  0.05, -0.20,
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.35,
		-0.25,  0.05, -0.35,
		-0.25,  0.05, -0.20,
		
		-0.25,  0.05, -0.20,
		-0.25, -0.10, -0.35,
		-0.25, -0.10, -0.20,
		-0.25,  0.05, -0.20,
		-0.25,  0.05, -0.35,
		-0.25, -0.10, -0.35,
		
		-0.20,  0.05, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.35, 
		-0.20, -0.10, -0.35,
		-0.20,  0.05, -0.20,
		-0.20, -0.10, -0.20,

		// WHEEL 4
		-0.25, -0.10,  0.15,
		-0.20, -0.10,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.15,

		-0.25,  0.05,  0.15,
		-0.20,  0.05,  0.15,
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.00,
		-0.25,  0.05,  0.00,
		-0.25,  0.05,  0.15,
	
		-0.25,  0.05,  0.15,
		-0.25, -0.10,  0.00,
		-0.25, -0.10,  0.15,
		-0.25,  0.05,  0.15,
		-0.25,  0.05,  0.00,
		-0.25, -0.10,  0.00,
		
		-0.20,  0.05,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.00, 
		-0.20, -0.10,  0.00,
		-0.20,  0.05,  0.15,
		-0.20, -0.10,  0.15,

		// CAR LEFT
		-0.20,  0.10,  0.25,
		-0.20, -0.10, -0.45,
		-0.20, -0.10,  0.25,
		-0.20,  0.10,  0.25,
		-0.20,  0.10, -0.45,
		-0.20, -0.10, -0.45,
		
		// CAR RIGHT
		 0.20,  0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10, -0.45, 
		 0.20, -0.10, -0.45,
		 0.20,  0.10,  0.25,
		 0.20, -0.10,  0.25,
];

var normals = [
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 // WHEELS

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,


		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 // end wheels

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,


		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 
		 //wheels
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 // end wheels

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		
		 //wheels
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,


		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,
		 0.00,  0.00,  1.00,

		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,
		 0.00,  1.00,  0.00,

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,

		 // end wheels

		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,
		-1.00,  0.00,  0.00,

		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,
		 1.00,  0.00,  0.00,


];


var colors = [

		// CAR BACK
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 			 
		 // CAR TOP
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,

		//WHEELS		 	
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,			 
		 			 
		 // CAR LEFT
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 			 
		 // CAR RIGHT
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,
		 0.00,  0.10,  0.50,

		 //Street
		 0.00,  0.00,  0.00,
	 	 0.00,  0.00,  0.00,
		 0.00,  0.00,  0.00,
		 0.00,  0.00,  0.00,
		 0.00,  0.00,  0.00, 
		 0.00,  0.00,  0.00,

		 0.50,  0.50,  0.50,
	 	 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50, 
		 0.50,  0.50,  0.50,

		 0.20,  0.20,  0.20,
	 	 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20, 
		 0.20,  0.20,  0.20,

		 0.50,  0.50,  0.50,
	 	 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50, 
		 0.50,  0.50,  0.50,

		 0.20,  0.20,  0.20,
	 	 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20,
		 0.20,  0.20,  0.20, 
		 0.20,  0.20,  0.20,

		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
	 	 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00,
		 1.00,  1.00,  1.00, 

		 // CAR BACK
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 			 
		 // CAR TOP	 	
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 			
		 //WHEELS		 	
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50, 
		 			 
		 // CAR LEFT
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 			 
		 // CAR RIGHT	
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,
		 1.00,  0.50,  0.00,	

		 // CAR BACK
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 			 
		 // CAR TOP
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 			 
		 //WHEELS		 	
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,
		 0.50,  0.50,  0.50,			 

		 // CAR LEFT
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 			 
		 // CAR RIGHT
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
		 0.50,  0.00,  0.00,
];


