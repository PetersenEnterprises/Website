function loadHeader(activeTab) {
	document.getElementById("Header").innerHTML = 	"<DIV CLASS=\"navbar navbar-fixed-top\">" +
														"<DIV CLASS=\"navbar-inner\">" +
															"<DIV CLASS=\"container\">" +
																"<A CLASS=\"brand\" HREF=\"http://jacob-petersen.com\">" +
																	"Jacob Petersen" +
																"</a>" +
																"<UL CLASS=\"nav\">" +
																	"<LI ID=\"Home\">" +
																		"<A HREF=\"http://jacob-petersen.com\">" +
																			"Home" +
																		"</A>" +
																	"</LI>" +
																	"<LI ID=\"About\">" +
																		"<A HREF=\"http://about.jacob-petersen.com\">" +
																			"About Me" +
																		"</A>" +
																	"</LI>" +
																	"<LI ID=\"Projects\">" +
																		"<A HREF=\"http://projects.jacob-petersen.com\">" +
																			"Projects" +
																		"</A>" +
																	"</LI>" +
																	"<LI ID=\"Resume\">" +
																		"<A HREF=\"http://resume.jacob-petersen.com\">" +
																			"Resume" +
																		"</A>" +
																	"</LI>" +
																	"<LI ID=\"Contact\">" +
																		"<A HREF=\"http://contact.jacob-petersen.com\">" +
																			"Contact Me" +
																		"</A>" +
																	"</LI>" +
																"</UL>" +
																"<UL CLASS=\"nav pull-right\">" +
																	"<LI>" +
																		"<A CLASS=\"nav-icon\" HREF=\"http://linkedin.jacob-petersen.com\">" +
																			"<I CLASS=\"icon-linkedin\"></I>" +
																		"</A>" +
																	"</LI>" +
																	"<LI>" +
																		"<A CLASS=\"nav-icon\" HREF=\"http://github.jacob-petersen.com\">" +
																			"<I CLASS=\"icon-github\"></I>" +
																		"</A>" +
																	"</LI>" +
																"</UL>" +
															"</DIV>" +
														"</DIV>" +
													"</DIV>" +
													"<BR />" +
													"<BR />" +
													"<BR />";
	document.getElementById(activeTab).className = "active";
}
function loadFooter() {
	document.getElementById("Footer").innerHTML = 	"<DIV CLASS=\"container\">" +
														"<HR />" +
														"<H4 CLASS=\"pull-right\">&copy; Jacob Petersen 2013</H4>" +
													"</DIV>";
}
