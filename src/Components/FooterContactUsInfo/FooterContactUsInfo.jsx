import "./FooterContactUsInfo.css";

export default function FooterContactUsInfo() {
	return (
		<div className="FooterContactUsInfo">
			<h3>Contact Us</h3>

			<div className="FooterContactUsInfoContainer">
				<div className="FooterlocationContainer">
					<div>
						<svg viewBox="0 0 100 100">
							<path d="M79.535 27.4c-.32-1.201-.971-2.48-1.452-3.6C72.324 9.96 59.741 5 49.581 5 35.98 5 21 14.12 19 32.919v3.841c0 .16.055 1.6.134 2.32 1.121 8.959 8.19 18.48 13.47 27.439 5.68 9.599 11.574 19.041 17.415 28.479 3.6-6.159 7.188-12.399 10.707-18.399.959-1.761 2.071-3.521 3.031-5.201.64-1.119 1.862-2.238 2.421-3.279C71.857 57.722 81 47.24 81 36.92v-4.24c0-1.119-1.387-5.039-1.465-5.28M49.83 46.68c-3.998 0-8.374-1.999-10.534-7.52-.322-.879-.296-2.64-.296-2.801v-2.48c0-7.038 5.976-10.239 11.175-10.239 6.4 0 11.351 5.121 11.351 11.521S56.23 46.68 49.83 46.68" />
						</svg>
					</div>

					<div>
						<p>
							70-1-9/1 , Opp.Visakha Dairy , Sarpavaram Junction ,
							KAKINADA (A.P) - 533005.
						</p>
					</div>
				</div>

				<div className="FooterMailIdContainer">
					<div>
						<svg viewBox="0 0 700 460">
							<path
								d="M655.3 16H40C26.7451 16 16 26.7452 16 40V418.5C16 431.755 26.7452 442.5 40 442.5H658.4C671.655 442.5 682.4 431.755 682.4 418.5V40C682.4 26.7452 671.655 16 658.4 16H655.3ZM570.684 42.65C592.066 42.65 602.774 68.5014 587.654 83.6206L371.175 300.1C359.425 311.85 338.95 311.85 327.2 300.1L110.68 83.6222C95.5587 68.5037 106.266 42.65 127.649 42.65H570.684ZM42.65 53.25C42.65 53.266 42.6564 53.2814 42.6677 53.2927L198.752 209.354C208.126 218.727 208.126 233.924 198.753 243.297L83.6205 358.429C68.5014 373.549 42.65 362.841 42.65 341.459V53.25V53.25ZM63.9177 415.843C63.9217 415.847 63.9283 415.847 63.9323 415.843L217.632 262.165C227.004 252.795 242.197 252.794 251.569 262.164L308.375 318.95C319.275 329.85 333.775 335.875 349.2 335.875C364.625 335.875 379.125 329.85 390.025 318.95L446.829 262.146C456.202 252.773 471.398 252.773 480.771 262.146L593.479 374.854C608.599 389.974 597.891 415.825 576.509 415.825H63.925C63.9158 415.825 63.9112 415.836 63.9177 415.843V415.843ZM655.75 341.478C655.75 362.861 629.897 373.568 614.778 358.447L499.642 243.294C490.271 233.922 490.271 218.728 499.642 209.356L614.778 94.2027C629.897 79.0819 655.75 89.7895 655.75 111.172V341.478Z"
								stroke="var(--primary)"
								strokeWidth="28"
							/>
						</svg>
					</div>
					<div>
						<p>sdvvlsurveyandconstruction@gmail.com</p>
					</div>
				</div>
				<div className="FooterMobileNumberContainer">
					<div>
						<svg viewBox="0 0 540 540">
							<path d="M447.2 92.2133C394.934 39.948 322.58 8.812 232.24 0L230 22.4013C314.969 30.7659 382.693 59.7347 431.6 108.12C480.507 156.5 508.579 224.448 517.016 309.427L539.417 307.187C530.605 216.542 499.543 144.56 447.204 92.2137L447.2 92.2133Z" />
							<path d="M241.536 59.0111L239 81.4124C301.349 88.8812 350.255 109.412 384.147 143.386C418.048 177.359 438.953 226.192 446.12 288.532L468.521 285.996C461.053 218.423 437.761 165.037 400.052 127.396C362.344 89.76 309.109 66.7653 241.532 59L241.536 59.0111Z" />
							<path d="M376.151 273.552L398.552 270.344C392.203 225.541 377.271 191.271 354.276 168.276C331.282 145.281 296.932 130.344 252.208 124L249 146.401C288.797 152.078 318.812 164.844 338.599 184.256C358.38 203.668 370.474 233.755 376.151 273.552Z" />
							<path d="M415.428 347.516C406.913 338.974 395.346 334.172 383.283 334.172C371.226 334.172 359.658 338.974 351.143 347.516L317.096 381.641V381.636C311.367 387.261 302.632 388.474 295.591 384.625C230.736 348.885 177.388 295.432 141.778 230.505C137.923 223.464 139.137 214.729 144.762 209L178.585 175.255C187.126 166.734 191.929 155.172 191.929 143.109C191.929 131.047 187.127 119.484 178.585 110.964L125.273 57.2812C116.736 48.776 105.179 44 93.1327 44C81.0805 44 69.5233 48.776 60.9873 57.2812L22.31 96.1039C3.68468 114.683 -3.99665 141.577 2.00335 167.187C22.9767 253.681 67.602 332.64 130.878 395.213C193.457 458.52 272.411 503.167 358.905 524.167C384.53 530.146 411.426 522.432 429.987 503.781L468.815 465.032H468.81C477.315 456.496 482.091 444.933 482.091 432.887C482.091 420.84 477.315 409.277 468.81 400.741L415.428 347.516Z" />
						</svg>
					</div>
					<div>
						<p>+91-812 165 2938</p>
						<p>+91-888 696 8522</p>
					</div>
				</div>
			</div>
		</div>
	);
}