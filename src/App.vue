<template>
<div id="app">
	<div class="side-navbar">
		<ul class="actions">
			<li>
				<font-awesome-icon icon="bars" size="2x" />
			</li>
			<li>
				<font-awesome-icon icon="user-alt" size="2x" />
			</li>
			<li>
				<router-link to="/cart" style="color: #063974">	
					<font-awesome-icon icon="shopping-cart" size="2x" />
					<div class="pale-yellow-dot"></div>
				</router-link>
			</li>
			<li>
				<font-awesome-icon icon="phone-alt" size="2x" />
			</li>
		</ul>

		<ul class="actions">
			<li>
				<font-awesome-icon :icon="['fab', 'facebook-square']" size="2x" />
			</li>
			<li>
				<font-awesome-icon :icon="['fab', 'twitter']" size="2x" />
			</li>
			<li>
				<font-awesome-icon :icon="['fab', 'youtube']" size="2x" />
			</li>
		</ul>
	</div>

	<div class="page-area">
		<div class="scrollable-overlay">
			<div class="top-navbar">
				<ul>
					<li class="logo">
						<router-link to="/">
							<img src="./assets/tchibo-logo.png">
						</router-link>
					</li>
					<li class="search-bar">
						<input type="text" placeholder="Search...">
						<button>
							<font-awesome-icon icon="search" />
						</button>
					</li>
					<li class="menu-item">
						<router-link to="/community">Community Market</router-link>
					</li>
					<li class="menu-item">
						<router-link to="/kits">Coffee Kits</router-link>
					</li>
					<li class="menu-item">
						<router-link to="/coffee-creator">Coffee Creator</router-link>
					</li>
					<li class="menu-item">
						<router-link to="/taste-test">Taste Test&nbsp;<font-awesome-icon icon="clock" /></router-link>
					</li>
				</ul>
			</div>

			<router-view />
		</div>
	</div>
</div>
</template>

<style scoped>

#app {
	display: grid;
	grid-template-columns: 50px 1fr;
	align-content: center;
}

.side-navbar {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100vh;
	padding: 40px 0;
}

.actions {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.actions li {
	color: #063974;
	padding-bottom: 10px;
	position: relative;
	cursor: pointer;
}

.page-area {
	display: flex;
	flex-direction: column;
	background-color: #063974;
	border: 1px solid #707070;
	border-radius: 10px 10px 100px 10px;
	height: calc(100vh - 30px);
	width: calc(100vw - 65px);
	margin: 15px 15px 15px 0;
	overflow: hidden;
	padding: 10px 30px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	background-image: url('/background.png');
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
.scrollable-overlay {
	height: 100%;
	overflow: auto;
	display: grid;
	grid-template-rows: 2fr 9fr;
	align-items: center;
}

.top-navbar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
}

.logo img {
	display: block;
	height: 80px;
	margin-bottom: 35%;
}

.search-bar {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	position: relative;
}

.search-bar input {
	display: flex;
	flex-direction: row;
	align-items: center;
	border-radius: 30px;
	height: 35px;
	width: 240px;
	border: 1px solid #EBEBEB;
	padding: 10px;
	box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.search-bar input:focus {
	outline: none;
	border: 3px dashed #D5C17E;
}

.search-bar button {
	display: block;
	color: #D5C17E;
	height: 35px;
	width: 35px;
	position: absolute; 
	top: 50%;
	right: 0;
	transform: translate(0, -50%);
	background-color: transparent;
	border: 0;
	cursor: pointer;
	font-size: 20px;
}

.search-bar button:focus {
	outline: none;
}

.top-navbar ul {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}

.top-navbar li.menu-item a {
	color: #D5C17E;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	text-decoration: none;
	border-bottom: 2px solid #D5C17E;
	line-height: 1.5;
	margin: 10px;
	font-size: 18px;
	font-weight: bold;
	padding: 0 5px;
	transition: 200ms all;
}

.top-navbar li.menu-item a:hover {
	opacity: .9;
}

.pale-yellow-dot {
	display: block;
	background-color: #FFBB00;
	z-index: -1;
	height: 13px;
	width: 13px;
	border-radius: 50%;
	position: absolute;
	top: -3px;
	right: -5px;
}

</style>
