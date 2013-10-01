fur = angular.module('fur');
fur.controller("mainCtrl", [ '$scope',
		function($scope ) {
			$scope.pages = [{"id": 1, "name": "Fletcher Skinner", "phone": "1 23 842 9414-4828", "email": "luctus.felis.purus@scelerisquedui.edu"},
			            	{"id": 2, "name": "Thane Becker", "phone": "1 45 618 8429-7001", "email": "Cras.eu.tellus@cursuset.co.uk"},
			            	{"id": 3, "name": "James Flores", "phone": "1 33 612 1591-4049", "email": "lacinia.at@consequatenimdiam.edu"},
			            	{"id": 4, "name": "Akeem Gilliam", "phone": "1 81 490 8387-8101", "email": "gravida.sagittis.Duis@nequenon.net"},
			            	{"id": 5, "name": "Graiden Witt", "phone": "1 14 500 1851-8899", "email": "et@quamquisdiam.com"},
			            	{"id": 6, "name": "Scott Robertson", "phone": "1 20 827 9766-1675", "email": "interdum@gravidasagittis.ca"},
			            	{"id": 7, "name": "Caesar French", "phone": "1 50 342 3325-2072", "email": "purus.accumsan.interdum@nulla.net"},
			            	{"id": 8, "name": "Malachi Klein", "phone": "1 82 333 9045-2702", "email": "ante@ornareegestas.co.uk"},
			            	{"id": 9, "name": "Oren Weaver", "phone": "1 18 637 6353-0012", "email": "in@arcuMorbi.ca"},
			            	{"id": 10, "name": "Berk Tate", "phone": "1 89 900 4432-2330", "email": "viverra.Donec.tempus@etmagnisdis.edu"}];
			$scope.allpages = [
			            	
			            	{"id": 11, "name": "Edan Aguirre", "phone": "1 13 236 7994-0829", "email": "vel.sapien.imperdiet@Duissitamet.net"},
			            	{"id": 12, "name": "Forrest Kane", "phone": "1 97 807 5735-0354", "email": "accumsan.neque@gravida.co.uk"},
			            	{"id": 13, "name": "Caldwell Pittman", "phone": "1 90 988 3819-2699", "email": "sed.hendrerit@massaVestibulum.net"},
			            	{"id": 14, "name": "Zeph Hill", "phone": "1 83 928 9427-5976", "email": "tellus.justo.sit@enimSuspendisse.org"},
			            	{"id": 15, "name": "Luke Cabrera", "phone": "1 72 166 1367-2056", "email": "purus@Quisqueornare.com"},
			            	{"id": 16, "name": "Peter Oneill", "phone": "1 87 446 1974-6818", "email": "netus.et.malesuada@tinciduntpede.edu"},
			            	{"id": 17, "name": "Caleb Rose", "phone": "1 51 401 2613-4821", "email": "natoque@semperauctorMauris.ca"},
			            	{"id": 18, "name": "Jakeem Obrien", "phone": "1 33 803 7648-8230", "email": "Phasellus.dolor@pharetra.edu"},
			            	{"id": 19, "name": "Elijah Bruce", "phone": "1 51 353 9355-8171", "email": "pede@tristiquepellentesque.ca"},
			            	{"id": 20, "name": "Yoshio Newton", "phone": "1 41 937 4544-9590", "email": "mattis.semper.dui@variusultrices.net"},
			            	{"id": 21, "name": "Steven Harrington", "phone": "1 60 271 1396-3595", "email": "nulla.Integer@ipsum.co.uk"},
			            	{"id": 22, "name": "Octavius Hubbard", "phone": "1 82 491 8296-1322", "email": "Phasellus.libero@Donecconsectetuer.org"},
			            	{"id": 23, "name": "Daniel Dotson", "phone": "1 78 334 6545-3846", "email": "lorem@cursusnonegestas.ca"},
			            	{"id": 24, "name": "Philip Riley", "phone": "1 71 197 1335-5524", "email": "cursus.et.magna@nonluctussit.com"},
			            	{"id": 25, "name": "Dalton Austin", "phone": "1 51 503 8844-6227", "email": "euismod@sodalesat.ca"},
			            	{"id": 26, "name": "Sean Slater", "phone": "1 14 242 7378-5736", "email": "dui@aliquet.org"},
			            	{"id": 27, "name": "Jason Lowery", "phone": "1 97 870 9235-1255", "email": "orci.Donec@liberomaurisaliquam.org"},
			            	{"id": 28, "name": "Kasimir Ward", "phone": "1 13 375 8761-2100", "email": "Pellentesque.habitant.morbi@feugiat.edu"},
			            	{"id": 29, "name": "Gabriel Hyde", "phone": "1 25 179 2595-1954", "email": "arcu@lacus.edu"},
			            	{"id": 30, "name": "Lester Cameron", "phone": "1 37 337 1361-7133", "email": "vitae@ullamcorper.net"},
			            	{"id": 31, "name": "Chase Walter", "phone": "1 91 533 8338-0418", "email": "eu.nibh.vulputate@eliterat.co.uk"},
			            	{"id": 32, "name": "Cody Wilkins", "phone": "1 63 495 5192-3814", "email": "nec.mauris@nonummyFuscefermentum.co.uk"},
			            	{"id": 33, "name": "Castor Branch", "phone": "1 96 373 8317-5138", "email": "vehicula.Pellentesque@elementumat.org"},
			            	{"id": 34, "name": "Graham Fowler", "phone": "1 82 526 1199-2999", "email": "pharetra@vulputateullamcorper.edu"},
			            	{"id": 35, "name": "Kasimir Shaffer", "phone": "1 67 242 5928-3566", "email": "in@Sed.edu"},
			            	{"id": 36, "name": "Chancellor Bolton", "phone": "1 41 134 7757-2430", "email": "elit.Etiam@sed.net"},
			            	{"id": 37, "name": "Kasimir Wagner", "phone": "1 11 662 6937-1403", "email": "odio.vel@malesuadautsem.edu"},
			            	{"id": 38, "name": "Gavin Weber", "phone": "1 48 344 1747-2384", "email": "Donec@velfaucibusid.org"},
			            	{"id": 39, "name": "Addison Gentry", "phone": "1 64 488 8600-0049", "email": "ac@vitae.ca"},
			            	{"id": 40, "name": "Prescott Case", "phone": "1 91 931 5089-0144", "email": "Aliquam.erat@seddictum.edu"},
			            	{"id": 41, "name": "Guy Huff", "phone": "1 24 907 8314-1233", "email": "Curae@Vestibulumante.net"},
			            	{"id": 42, "name": "Duncan Mooney", "phone": "1 84 220 5645-0974", "email": "dictum.eu.placerat@orci.edu"},
			            	{"id": 43, "name": "Elton Cannon", "phone": "1 35 568 3050-4288", "email": "neque@egestasSedpharetra.net"},
			            	{"id": 44, "name": "Erasmus Harrison", "phone": "1 72 220 9470-7833", "email": "leo.Vivamus@nec.edu"},
			            	{"id": 45, "name": "Palmer Noel", "phone": "1 59 532 5112-5497", "email": "auctor.Mauris@ametrisusDonec.ca"},
			            	{"id": 46, "name": "Knox Macdonald", "phone": "1 44 978 8958-6236", "email": "dui.Cum.sociis@atvelitCras.co.uk"},
			            	{"id": 47, "name": "Alec Kent", "phone": "1 45 511 7063-6270", "email": "nulla@necanteMaecenas.org"},
			            	{"id": 48, "name": "Jared Sanders", "phone": "1 17 274 8666-6102", "email": "turpis.non@ipsumDonec.edu"},
			            	{"id": 49, "name": "Aaron Mitchell", "phone": "1 72 483 8821-3020", "email": "Aliquam@imperdietnec.ca"},
			            	{"id": 50, "name": "Brian Mcknight", "phone": "1 32 659 7829-8860", "email": "Sed@adipiscinglacus.org"},
			            	{"id": 51, "name": "Kermit Cline", "phone": "1 76 478 4170-3436", "email": "fermentum@Sednec.ca"},
			            	{"id": 52, "name": "Robert Oneil", "phone": "1 57 459 9992-5191", "email": "Donec.dignissim@ipsumSuspendissenon.co.uk"},
			            	{"id": 53, "name": "Phelan Weeks", "phone": "1 21 381 1497-2629", "email": "imperdiet@risusNuncac.net"},
			            	{"id": 54, "name": "Rashad Collins", "phone": "1 39 234 8347-1392", "email": "tortor.dictum@Nuncullamcorper.com"},
			            	{"id": 55, "name": "Garrett Hoffman", "phone": "1 40 730 5291-0149", "email": "nonummy@Aeneaneget.edu"},
			            	{"id": 56, "name": "Rogan Rowland", "phone": "1 31 758 5956-3913", "email": "lobortis.mauris@tinciduntaliquam.net"},
			            	{"id": 57, "name": "Drew Farmer", "phone": "1 74 766 5176-9591", "email": "Nunc@ornareelitelit.org"},
			            	{"id": 58, "name": "Harper Kirk", "phone": "1 73 609 1408-7351", "email": "nisl@ipsumcursusvestibulum.org"},
			            	{"id": 59, "name": "Macon Daniels", "phone": "1 32 235 5339-7861", "email": "convallis.ligula@tempor.com"},
			            	{"id": 60, "name": "Cairo Hampton", "phone": "1 15 915 2015-7379", "email": "eu.odio@atlacus.org"},
			            	{"id": 61, "name": "Rogan Welch", "phone": "1 26 631 4466-5060", "email": "et@dictumeu.co.uk"},
			            	{"id": 62, "name": "Palmer Parrish", "phone": "1 60 565 7051-9535", "email": "ac@cursusvestibulumMauris.edu"},
			            	{"id": 63, "name": "Gavin Craft", "phone": "1 74 884 7466-2323", "email": "varius.et.euismod@fringillaeuismodenim.co.uk"},
			            	{"id": 64, "name": "Griffin Oconnor", "phone": "1 99 140 7168-5860", "email": "est.tempor.bibendum@lectusquis.co.uk"},
			            	{"id": 65, "name": "Caldwell Becker", "phone": "1 25 443 3292-6516", "email": "tellus.justo@Mauriseuturpis.net"},
			            	{"id": 66, "name": "Fritz Fitzpatrick", "phone": "1 42 949 4932-0435", "email": "ipsum.dolor.sit@Duisatlacus.edu"},
			            	{"id": 67, "name": "Stewart Delgado", "phone": "1 74 430 9047-4716", "email": "ridiculus.mus.Proin@etpede.org"},
			            	{"id": 68, "name": "Zahir Francis", "phone": "1 54 712 5025-9424", "email": "eros.non.enim@consectetueradipiscing.ca"},
			            	{"id": 69, "name": "Yardley Lloyd", "phone": "1 17 664 2246-2717", "email": "vitae.posuere@mattisvelitjusto.com"},
			            	{"id": 70, "name": "Cain Holman", "phone": "1 36 664 3128-1789", "email": "cursus.et@magnatellus.co.uk"},
			            	{"id": 71, "name": "Seth Daniels", "phone": "1 26 481 6809-9426", "email": "vulputate@Quisque.edu"},
			            	{"id": 72, "name": "Darius Dillon", "phone": "1 30 214 7506-3270", "email": "ridiculus.mus@in.ca"},
			            	{"id": 73, "name": "Cody Castillo", "phone": "1 57 418 3123-4464", "email": "lacinia.mattis@etlaciniavitae.org"},
			            	{"id": 74, "name": "Vance Weeks", "phone": "1 72 778 4909-1248", "email": "mauris.sagittis@Namnullamagna.net"},
			            	{"id": 75, "name": "Yasir David", "phone": "1 14 850 6449-3375", "email": "enim@turpisnec.org"},
			            	{"id": 76, "name": "Henry Keith", "phone": "1 76 952 5211-2327", "email": "scelerisque@lacuspedesagittis.edu"},
			            	{"id": 77, "name": "Cyrus Sexton", "phone": "1 56 607 1435-8825", "email": "eu.lacus.Quisque@cursusNuncmauris.edu"},
			            	{"id": 78, "name": "Vernon French", "phone": "1 42 514 3934-1197", "email": "quis.pede.Suspendisse@nuncIn.org"},
			            	{"id": 79, "name": "Stewart Harvey", "phone": "1 36 683 5655-5898", "email": "arcu.imperdiet@nislNulla.co.uk"},
			            	{"id": 80, "name": "Magee Bruce", "phone": "1 18 185 9433-3760", "email": "facilisis.non@Inlorem.edu"},
			            	{"id": 81, "name": "Xavier Hampton", "phone": "1 68 342 3892-4032", "email": "sit@malesuadafamesac.net"},
			            	{"id": 82, "name": "Brent Hess", "phone": "1 18 102 5405-4412", "email": "Praesent.interdum.ligula@Phasellusdapibus.org"},
			            	{"id": 83, "name": "Jerome Flynn", "phone": "1 86 617 8975-0159", "email": "augue@fringilla.edu"},
			            	{"id": 84, "name": "Cooper Chapman", "phone": "1 56 374 8252-7813", "email": "mollis.vitae@ornare.edu"},
			            	{"id": 85, "name": "Steven Suarez", "phone": "1 20 512 1291-4161", "email": "natoque.penatibus@luctuslobortis.ca"},
			            	{"id": 86, "name": "Calvin Leblanc", "phone": "1 49 674 9870-7628", "email": "felis@In.ca"},
			            	{"id": 87, "name": "Adam Graham", "phone": "1 21 935 3978-1221", "email": "arcu.et.pede@metusIn.co.uk"},
			            	{"id": 88, "name": "Dolan Sutton", "phone": "1 69 240 5521-5526", "email": "dignissim.tempor@iaculis.ca"},
			            	{"id": 89, "name": "Uriel Petty", "phone": "1 72 981 1399-6865", "email": "Quisque@nisiCum.ca"},
			            	{"id": 90, "name": "Roth Moore", "phone": "1 24 889 5089-9561", "email": "ac.mattis@egetnisi.co.uk"},
			            	{"id": 91, "name": "Emerson Landry", "phone": "1 52 202 3678-5309", "email": "tincidunt@quisurnaNunc.co.uk"},
			            	{"id": 92, "name": "Nathan Parrish", "phone": "1 92 407 8437-7829", "email": "libero.nec.ligula@lorem.edu"},
			            	{"id": 93, "name": "Victor Bird", "phone": "1 63 245 1420-1093", "email": "non.sollicitudin@aptent.org"},
			            	{"id": 94, "name": "Garrett Wynn", "phone": "1 22 311 6336-3416", "email": "magna.nec@augue.edu"},
			            	{"id": 95, "name": "Jonas Molina", "phone": "1 25 559 6610-9121", "email": "vel.est@enimnisl.co.uk"},
			            	{"id": 96, "name": "Neville Mcneil", "phone": "1 21 887 5035-5971", "email": "luctus.et@amet.net"},
			            	{"id": 97, "name": "Conan Butler", "phone": "1 84 408 8386-0482", "email": "Cum@placeratorcilacus.net"},
			            	{"id": 98, "name": "Deacon Conway", "phone": "1 32 947 2489-7971", "email": "mollis.dui@augueidante.edu"},
			            	{"id": 99, "name": "Price Scott", "phone": "1 22 644 3309-6238", "email": "blandit@musProin.com"},
			            	{"id": 100, "name": "Jared Fox", "phone": "1 94 108 8000-8820", "email": "Aliquam.nisl@Integereu.edu"}
			            ];
			$scope.title = 'Grid example';
			$scope.columns = [{label:'#', 
								value:'id', 
								sortFunction: function(a) {
									return Number(a.id);
								},
								headerTemplate: '<i>[{{col.label}}]</i>',
								template: '<i>{{row.id}}</i>'
								}, 
								{label:'Name', 
								value:'name', 
								sortFunction: function(a){
									return a.name.toLowerCase();}}, 
									
								'phone',
								
								{label:'E-mail address', 
								template:'<a href="mailto:{{row.email}}">{{row.email}}</a>',
								value:'email'}];
			
			$scope.addPage = function() {
				$scope.pages.push($scope.allpages.shift());
			};
			
			$scope.$on('gridSelectionChanged', function(evt, selection) {});
		} ]);