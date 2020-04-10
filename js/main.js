new Vue({
	el: '#mainCatList',
	data:{
		lists:[
			{name: "Business", icon : "fas fa-wallet fa-4x", plcholder: "e.g., John's business website, Mary's business"},
			{name: "Online Store", icon: "fab fa-app-store fa-4x", plcholder: "e.g., Bob's online store , Ethan's shop online"},
			{name: "Blog", icon: "fas fa-rss fa-4x", plcholder: "e.g., Nathan's blog, Lauren's blog"},
			{name: "Handyman Services", icon: "fas fa-user-cog fa-4x", plcholder: "e.g., Smith's Handyman services"},
			{name: "Restaurants and Food", icon: "fas fa-utensils fa-4x", plcholder: "e.g., Aron's eatery, Jesse's Restaurant"},
			{name: "Photography", icon: "fas fa-camera-retro fa-4x", plcholder: "e.g., Smith's Photography, Jacky's Photographs"},
			{name: "Events", icon: "far fa-calendar-alt fa-4x", plcholder: "e.g., John and Mary's Wedding, Larry's Venue"},
			{name: "Technology & Web", icon: "fas fa-desktop fa-4x", plcholder: "e.g., John's Technology Business, Will's Web Services"},
			{name: "Transportation Services", icon: "fas fa-car fa-4x", plcholder: "e.g., Emma's Rental Service, Barry's Bus Rental"},
			{name: "Hospitality & Tourism", icon: "fas fa-plane-departure fa-4x", plcholder: "Smith's hotel,Alfred's bed and Breakfast"},
			{name: "Music", icon: "fas fa-headphones-alt fa-4x", plcholder: "e.g., Lisa's Music Service, David's Musician Website"},
			{name: "Creative Arts", icon: "fas fa-palette fa-4x", plcholder: "e.g., Linda's Performance Arts, Charles' Comedy"},
			{name: "Health & Wellness", icon: "far fa-heart fa-4x", plcholder: "e.g., Janet's Health Center, Victoria's Wellness Service"},
			{name: "Recreation & Sport", icon: "fas fa-dumbbell fa-4x", plcholder: "e.g., Smith's Sports Network, Bruce's Athletic Clubs"},
			{name: "CV & Portfolio", icon: "fas fa-male fa-4x", plcholder: "e.g., Hartson's CV and Portfolio Service"},
			{name: "Community", icon: "fas fa-school fa-4x", plcholder: "e.g., New Youth Community Club, Simpson Community Organization"}
		],
		selectedName: '',
		selectedPlcholder: '',
		step: 1,
	},
	methods:{
		selectIcon(index){
			console.log(this.lists[index]);
			this.selectedName = this.lists[index].name;
			this.step = 2;
			this.selectedPlcholder = this.lists[index].plcholder;
		},
		started() {
			this.step = 3;
		},
		stepN(index) {
			this.step = index;
		},
		Back(index) {
			this.step = index - 1;
		}
	}
})