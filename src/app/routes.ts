import { Routes } from "@angular/router";

import { AboutCompanyComponent } from "./about-company/about-company.component";
import { AmbassadorComponent } from './ambassador/ambassador.component';
import { HowItWorksComponent } from "./how-it-works/how-it-works.component";
import { EventsComponent } from "./events/events.component";
import { FaqComponent } from "./faq/faq.component";
import { ContactComponent } from "./contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { GetStartedComponent } from './get-started/get-started.component';
import { DownloadComponent } from "./download/download.component";
import { PageLayoutComponent } from "./page-layout/page-layout.component";
import {
	PrivacyPolicyComponent
} from "./privacy-policy/privacy-policy.component";
import {
	MobilePrivacyPolicyComponent
} from "./mobile-privacy-policy/mobile-privacy-policy.component";
import { ServiceTermsComponent } from "./service-terms/service-terms.component";
import { VisionComponent } from "./vision/vision.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { JoinComponent } from './join/join.component';
import { PreferredProvidersComponent } from './preferredproviders/preferredproviders.component';
import { OxtComponent } from './oxt/oxt.component';
import { PartnersComponent } from './partners/partners.component';

import { PodcastComponent } from './podcast/podcast.component';
import { PodcastEp1Component } from './podcast-ep1/podcast.component';
import { PodcastEp2Component } from './podcast-ep2/podcast.component';
import { PodcastEp3Component } from './podcast-ep3/podcast.component';
import { PodcastEp4Component } from './podcast-ep4/podcast.component';
import { PodcastEp5Component } from './podcast-ep5/podcast.component';
import { PodcastEp6Component } from './podcast-ep6/podcast.component';
import { PodcastEp7Component } from './podcast-ep7/podcast.component';
import { PodcastEp8Component } from './podcast-ep8/podcast.component';
import { PodcastEp9Component } from './podcast-ep9/podcast.component';
import { PodcastEp10Component } from './podcast-ep10/podcast.component';
import { PodcastEp11Component } from './podcast-ep11/podcast.component';
import { PodcastEp12Component } from './podcast-ep12/podcast.component';
import { PodcastEp13Component } from './podcast-ep13/podcast.component';
import { PodcastEp14Component } from './podcast-ep14/podcast.component';
import { PodcastEp15Component } from './podcast-ep15/podcast.component';
import { PodcastEp16Component } from './podcast-ep16/podcast.component';
import { PodcastEp17Component } from './podcast-ep17/podcast.component';
import { PodcastEp18Component } from './podcast-ep18/podcast.component';
import { PodcastEp19Component } from './podcast-ep19/podcast.component';
import { PodcastEp20Component } from './podcast-ep20/podcast.component';
import { PodcastEp21Component } from './podcast-ep21/podcast.component';
import { PodcastEp22Component } from './podcast-ep22/podcast.component';
import { PodcastEp23Component } from './podcast-ep23/podcast.component';
import { PodcastEp24Component } from './podcast-ep24/podcast.component';
import { PodcastEp25Component } from './podcast-ep25/podcast.component';
import { PodcastEp26Component } from './podcast-ep26/podcast.component';
import { PodcastEp27Component } from './podcast-ep27/podcast.component';
import { PodcastEp28Component } from './podcast-ep28/podcast.component';
import { PodcastEp29Component } from './podcast-ep29/podcast.component';
import { PodcastEp30Component } from './podcast-ep30/podcast.component';
import { PodcastEp31Component } from './podcast-ep31/podcast.component';
import { PodcastEp32Component } from './podcast-ep32/podcast.component';
import { PodcastEp33Component } from './podcast-ep33/podcast.component';
import { PodcastEp34Component } from './podcast-ep34/podcast.component';
import { PodcastEp35Component } from './podcast-ep35/podcast.component';
import { PodcastEp36Component } from './podcast-ep36/podcast.component';
import { PodcastEp37Component } from './podcast-ep37/podcast.component';
import { PodcastEp38Component } from './podcast-ep38/podcast.component';
import { PodcastEp39Component } from './podcast-ep39/podcast.component';
import { PodcastEp40Component } from './podcast-ep40/podcast.component';
import { PodcastEp41Component } from './podcast-ep41/podcast.component';
import { PodcastEp42Component } from './podcast-ep42/podcast.component';
import { PodcastEp43Component } from './podcast-ep43/podcast.component';
import { PodcastEp44Component } from './podcast-ep44/podcast.component';
import { PodcastEp45Component } from './podcast-ep45/podcast.component';
import { PodcastEp46Component } from './podcast-ep46/podcast.component';
import { PodcastEp47Component } from './podcast-ep47/podcast.component';
import { PodcastEp48Component } from './podcast-ep48/podcast.component';
import { PodcastEp49Component } from './podcast-ep49/podcast.component';
import { PodcastEp50Component } from './podcast-ep50/podcast.component';
import { PodcastEp51Component } from './podcast-ep51/podcast.component';
import { PodcastEp52Component } from './podcast-ep52/podcast.component';
import { PodcastEp53Component } from './podcast-ep53/podcast.component';
import { PodcastEp54Component } from './podcast-ep54/podcast.component';
import { PodcastEp55Component } from './podcast-ep55/podcast.component';
import { PodcastEp56Component } from './podcast-ep56/podcast.component';
import { PodcastEp57Component } from './podcast-ep57/podcast.component';
import { PodcastEp58Component } from './podcast-ep58/podcast.component';
import { PodcastEp59Component } from './podcast-ep59/podcast.component';
import { PodcastEp60Component } from './podcast-ep60/podcast.component';
import { PodcastEp61Component } from './podcast-ep61/podcast.component';
import { PodcastEp62Component } from './podcast-ep62/podcast.component';
import { PodcastEp63Component } from './podcast-ep63/podcast.component';
import { PodcastEp64Component } from './podcast-ep64/podcast.component';
import { PodcastEp65Component } from './podcast-ep65/podcast.component';
import { PodcastEp66Component } from './podcast-ep66/podcast.component';
import { PodcastEp67Component } from './podcast-ep67/podcast.component';

import { NewsletterSignupPage } from './newsletter-signup-page/newsletter-signup-page.component';
import { WebinarLPComponent } from './webinar-lp/webinar-lp.component';
import { QuizComponent } from './quiz/quiz.component';
import { Slides2021Component } from './slides-2021/slides.component';
import { Priv8 } from './priv8/priv8.component';
import { Priv8Signup } from './priv8-signup/priv8-signup.component';

export const routes: Routes = [
	{
		path: "",
		component: PageLayoutComponent,
		children: [
			{ path: "", component: HomeComponent },
			{ path: "get-orchid", component: GetStartedComponent, data: { basicLayout: true } },
			{ path: "get-orchid.html", redirectTo: "get-orchid" },
			{ path: "get-started", redirectTo: "get-orchid" },
			{ path: "app", redirectTo: "download" },
			{ path: "app.html", redirectTo: "download" },
			{ path: "how-it-works", component: HowItWorksComponent },
			{ path: "how-it-works.html", redirectTo: "how-it-works" },
			{ path: "vision", component: VisionComponent },
			{ path: "vision.html", redirectTo: "vision" },
			{ path: "about-us", component: AboutCompanyComponent },
			{ path: "about-us.html", redirectTo: "about-us" },
			{ path: "privacy-guardian", component: AmbassadorComponent },
			{ path: "privacy-guardian.html", redirectTo: "ambassador" },
			{ path: "faq", component: FaqComponent },
			{ path: "faq.html", redirectTo: "faq" },
			{ path: "contact", component: ContactComponent },
			{ path: "download", component: DownloadComponent },
			{ path: "download.html", redirectTo: "download" },
			{ path: "events", component: EventsComponent },
			{ path: "events.html", redirectTo: "events" },
			{ path: "join", component: JoinComponent },
			{ path: "join.html", redirectTo: "join" },
			{ path: "webinar", component: WebinarLPComponent },
			{ path: "privacy-policy", component: PrivacyPolicyComponent },
			{ path: "mobile-privacy-policy", component: MobilePrivacyPolicyComponent },
			{ path: "privacy-policy.html", redirectTo: "privacy-policy" },
			{ path: "mobile-privacy-policy.html", redirectTo: "mobile-privacy-policy" },
			{ path: "service-terms", component: ServiceTermsComponent },
			{ path: "service-terms.html", redirectTo: "service-terms" },
			{ path: "oxt", component: OxtComponent },
			{ path: "oxt.html", redirectTo: "oxt" },
			{ path: "preferredproviders", component: PreferredProvidersComponent },
			{ path: "preferredproviders.html", redirectTo: "preferredproviders" },
			{ path: "partners", component: PartnersComponent },
			{ path: "partners.html", redirectTo: "partners" },
			{ path: "podcast", component: PodcastComponent },
			{ path: "podcast.html", redirectTo: "podcast" },
			{ path: "podcast/episode-1-interview-with-rich-starpoli", component: PodcastEp1Component },
			{ path: "podcast/episode-1-interview-with-rich-starpoli.html", redirectTo: "podcast/episode-1-interview-with-rich-starpoli" },
			{ path: "podcast/episode-2-vinny-lingham", component: PodcastEp2Component },
			{ path: "podcast/episode-2-vinny-lingham.html", redirectTo: "podcast/episode-2-vinny-lingham" },
			{ path: "podcast/episode-3-jyri-engestrom", component: PodcastEp3Component },
			{ path: "podcast/episode-3-jyri-engestrom.html", redirectTo: "podcast/episode-3-jyri-engestrom" },
			{ path: "podcast/episode-4-roger-ver", component: PodcastEp4Component },
			{ path: "podcast/episode-4-roger-ver.html", redirectTo: "podcast/episode-4-roger-ver" },
			{ path: "podcast/episode-5-jehan-chu", component: PodcastEp5Component },
			{ path: "podcast/episode-5-jehan-chu.html", redirectTo: "podcast/episode-5-jehan-chu" },
			{ path: "podcast/episode-6-paul-veradittakit", component: PodcastEp6Component },
			{ path: "podcast/episode-6-paul-veradittakit.html", redirectTo: "podcast/episode-6-paul-veradittakit" },
			{ path: "podcast/episode-7-alexander-lloyd", component: PodcastEp7Component },
			{ path: "podcast/episode-7-alexander-lloyd.html", redirectTo: "podcast/episode-7-alexander-lloyd" },
			{ path: "podcast/episode-8-cindy-cohn", component: PodcastEp8Component },
			{ path: "podcast/episode-8-cindy-cohn.html", redirectTo: "podcast/episode-8-cindy-cohn" },
			{ path: "podcast/episode-9-david-chaum", component: PodcastEp9Component },
			{ path: "podcast/episode-9-david-chaum.html", redirectTo: "podcast/episode-9-david-chaum" },
			{ path: "podcast/episode-10-ben-bartlett", component: PodcastEp10Component },
			{ path: "podcast/episode-10-ben-bartlett.html", redirectTo: "podcast/episode-10-ben-bartlett" },
			{ path: "podcast/episode-11-richard-muirhead", component: PodcastEp11Component },
			{ path: "podcast/episode-11-richard-muirhead.html", redirectTo: "podcast/episode-11-richard-muirhead" },
			{ path: "podcast/episode-12-ken-seiff", component: PodcastEp12Component },
			{ path: "podcast/episode-12-ken-seiff.html", redirectTo: "podcast/episode-12-ken-seiff" },
			{ path: "podcast/episode-13-brian-j-fox", component: PodcastEp13Component },
			{ path: "podcast/episode-13-brian-j-fox.html", redirectTo: "podcast/episode-13-brian-j-fox" },
			{ path: "podcast/episode-14-juan-gilbert", component: PodcastEp14Component },
			{ path: "podcast/episode-14-juan-gilbert.html", redirectTo: "podcast/episode-14-juan-gilbert" },
			{ path: "podcast/episode-15-val-mack", component: PodcastEp15Component },
			{ path: "podcast/episode-15-val-mack.html", redirectTo: "podcast/episode-15-val-mack" },
			{ path: "podcast/episode-16-jason-brett", component: PodcastEp16Component },
			{ path: "podcast/episode-16-jason-brett.html", redirectTo: "podcast/episode-16-jason-brett" },
			{ path: "podcast/episode-17-dawn-song.html", redirectTo: "podcast/episode-17-dawn-song" },
			{ path: "podcast/episode-17-dawn-song", component: PodcastEp17Component },
			{ path: "podcast/episode-18-alex-gluchowski.html", redirectTo: "podcast/episode-18-alex-gluchowski" },
			{ path: "podcast/episode-18-alex-gluchowski", component: PodcastEp18Component },
			{ path: "podcast/episode-19-david-pan.html", redirectTo: "podcast/episode-19-david-pan" },
			{ path: "podcast/episode-19-david-pan", component: PodcastEp19Component },
			{ path: "podcast/episode-20-neeraj-khandelwal.html", redirectTo: "podcast/episode-20-neeraj-khandelwal" },
			{ path: "podcast/episode-20-neeraj-khandelwal", component: PodcastEp20Component },
			{ path: "podcast/episode-21-felipe-erazo.html", redirectTo: "podcast/episode-21-felipe-erazo" },
			{ path: "podcast/episode-21-felipe-erazo", component: PodcastEp21Component },
			{ path: "podcast/episode-22-adriana-hamacher.html", redirectTo: "podcast/episode-22-adriana-hamacher" },
			{ path: "podcast/episode-22-adriana-hamacher", component: PodcastEp22Component },
			{ path: "podcast/episode-23-roneil-rumburg.html", redirectTo: "podcast/episode-23-roneil-rumburg" },
			{ path: "podcast/episode-23-roneil-rumburg", component: PodcastEp23Component },
			{ path: "podcast/episode-24-brad-kam.html", redirectTo: "podcast/episode-24-brad-kam" },
			{ path: "podcast/episode-24-brad-kam", component: PodcastEp24Component },
			{ path: "podcast/episode-25-roger-huang.html", redirectTo: "podcast/episode-25-roger-huang" },
			{ path: "podcast/episode-25-roger-huang", component: PodcastEp25Component },
			{ path: "podcast/episode-26-anne-ahola-ward.html", redirectTo: "podcast/episode-26-anne-ahola-ward" },
			{ path: "podcast/episode-26-anne-ahola-ward", component: PodcastEp26Component },
			{ path: "podcast/episode-27-kurt-rohloff.html", redirectTo: "podcast/episode-27-kurt-rohloff" },
			{ path: "podcast/episode-27-kurt-rohloff", component: PodcastEp27Component },
			{ path: "podcast/episode-28-andreas-antonopoulos.html", redirectTo: "podcast/episode-28-andreas-antonopoulos" },
			{ path: "podcast/episode-28-andreas-antonopoulos", component: PodcastEp28Component },
			{ path: "podcast/episode-29-yaniv-tal.html", redirectTo: "podcast/episode-29-yaniv-tal" },
			{ path: "podcast/episode-29-yaniv-tal", component: PodcastEp29Component },
			{ path: "podcast/episode-30-franck-nouyrigat.html", redirectTo: "podcast/episode-30-franck-nouyrigat" },
			{ path: "podcast/episode-30-franck-nouyrigat", component: PodcastEp30Component },
			{ path: "podcast/episode-31-jamie-king.html", redirectTo: "podcast/episode-31-jamie-king" },
			{ path: "podcast/episode-31-jamie-king", component: PodcastEp31Component },
			{ path: "podcast/episode-32-nathan-wilcox.html", redirectTo: "podcast/episode-32-nathan-wilcox" },
			{ path: "podcast/episode-32-nathan-wilcox", component: PodcastEp32Component },
			{ path: "podcast/episode-33-john-redgrave.html", redirectTo: "podcast/episode-33-john-redgrave" },
			{ path: "podcast/episode-33-john-redgrave", component: PodcastEp33Component },
			{ path: "podcast/episode-34-joe-toscano.html", redirectTo: "podcast/episode-34-joe-toscano" },
			{ path: "podcast/episode-34-joe-toscano", component: PodcastEp34Component },
			{ path: "podcast/episode-35-leigh-honeywell.html", redirectTo: "podcast/episode-35-leigh-honeywell" },
			{ path: "podcast/episode-35-leigh-honeywell", component: PodcastEp35Component },
			{ path: "podcast/episode-36-lance-vick.html", redirectTo: "podcast/episode-36-lance-vick" },
			{ path: "podcast/episode-36-lance-vick", component: PodcastEp36Component },
			{ path: "podcast/episode-37-david-henklel-wallace.html", redirectTo: "podcast/episode-37-david-henklel-wallace" },
			{ path: "podcast/episode-37-david-henklel-wallace", component: PodcastEp37Component },
			{ path: "podcast/episode-38-miko-matsumura.html", redirectTo: "podcast/episode-38-miko-matsumura" },
			{ path: "podcast/episode-38-miko-matsumura", component: PodcastEp38Component },
			{ path: "podcast/episode-39-gregory-landua.html", redirectTo: "podcast/episode-39-gregory-landua" },
			{ path: "podcast/episode-39-gregory-landua", component: PodcastEp39Component },
			{ path: "podcast/episode-40-marvin-tong.html", redirectTo: "podcast/episode-40-marvin-tong" },
			{ path: "podcast/episode-40-marvin-tong", component: PodcastEp40Component },
			{ path: "podcast/episode-41-aibek-esengulov.html", redirectTo: "podcast/episode-41-aibek-esengulov" },
			{ path: "podcast/episode-41-aibek-esengulov", component: PodcastEp41Component },
			{ path: "podcast/episode-42-tor-bair.html", redirectTo: "podcast/episode-42-tor-bair" },
			{ path: "podcast/episode-42-tor-bair", component: PodcastEp42Component },
			{ path: "podcast/episode-43-emin-gun-sirer.html", redirectTo: "podcast/episode-43-emin-gun-sirer" },
			{ path: "podcast/episode-43-emin-gun-sirer", component: PodcastEp43Component },
			{ path: "podcast/episode-44-bill-barhydt.html", redirectTo: "podcast/episode-44-bill-barhydt" },
			{ path: "podcast/episode-44-bill-barhydt", component: PodcastEp44Component },
			{ path: "podcast/episode-45-derek-e-silva.html", redirectTo: "podcast/episode-45-derek-e-silva" },
			{ path: "podcast/episode-45-derek-e-silva", component: PodcastEp45Component },
			{ path: "podcast/episode-46-edward-snowden.html", redirectTo: "podcast/episode-46-edward-snowden" },
			{ path: "podcast/episode-46-edward-snowden", component: PodcastEp46Component },
			{ path: "podcast/episode-47-kara-swisher.html", redirectTo: "podcast/episode-47-kara-swisher" },
			{ path: "podcast/episode-47-kara-swisher", component: PodcastEp47Component },
			{ path: "podcast/episode-48-avichal-garg.html", redirectTo: "podcast/episode-48-avichal-garg" },
			{ path: "podcast/episode-48-avichal-garg", component: PodcastEp48Component },
			{ path: "podcast/episode-49-dragana-kaurin.html", redirectTo: "podcast/episode-49-dragana-kaurin" },
			{ path: "podcast/episode-49-dragana-kaurin", component: PodcastEp49Component },
			{ path: "podcast/episode-50-rebecca-wexler.html", redirectTo: "podcast/episode-50-rebecca-wexler" },
			{ path: "podcast/episode-50-rebecca-wexler", component: PodcastEp50Component },
			{ path: "podcast/episode-51-greg-osuri.html", redirectTo: "podcast/episode-51-greg-osuri" },
			{ path: "podcast/episode-51-greg-osuri", component: PodcastEp51Component },
			{ path: "podcast/episode-52-gbenga-sesan.html", redirectTo: "podcast/episode-52-gbenga-sesan" },
			{ path: "podcast/episode-52-gbenga-sesan", component: PodcastEp52Component },
			{ path: "podcast/episode-53-jason-pielemeier.html", redirectTo: "podcast/episode-53-jason-pielemeier" },
			{ path: "podcast/episode-53-jason-pielemeier", component: PodcastEp53Component },
			{ path: "podcast/episode-54-brittany-piovesan.html", redirectTo: "podcast/episode-54-brittany-piovesan" },
			{ path: "podcast/episode-54-brittany-piovesan", component: PodcastEp54Component },
			{ path: "podcast/episode-55-john-gleeson.html", redirectTo: "podcast/episode-55-john-gleeson" },
			{ path: "podcast/episode-55-john-gleeson", component: PodcastEp55Component },
			{ path: "podcast/episode-56-michael-caster.html", redirectTo: "podcast/episode-56-michael-caster" },
			{ path: "podcast/episode-56-michael-caster", component: PodcastEp56Component },
			{ path: "podcast/episode-57-kean-birch.html", redirectTo: "podcast/episode-57-kean-birch" },
			{ path: "podcast/episode-57-kean-birch", component: PodcastEp57Component },
			{ path: "podcast/episode-58-jim-harper.html", redirectTo: "podcast/episode-58-jim-harper" },
			{ path: "podcast/episode-58-jim-harper", component: PodcastEp58Component },
			{ path: "podcast/episode-59-raullen-chai.html", redirectTo: "podcast/episode-59-raullen-chai" },
			{ path: "podcast/episode-59-raullen-chai", component: PodcastEp59Component },
			{ path: "podcast/episode-60-berhan-taye.html", redirectTo: "podcast/episode-60-berhan-taye" },
			{ path: "podcast/episode-60-berhan-taye", component: PodcastEp60Component },
			{ path: "podcast/episode-61-dr-gabriela-zanfir-fortuna.html", redirectTo: "podcast/episode-61-dr-gabriela-zanfir-fortuna" },
			{ path: "podcast/episode-61-dr-gabriela-zanfir-fortuna", component: PodcastEp61Component },
			{ path: "podcast/episode-62-leo-scwartz.html", redirectTo: "podcast/episode-62-leo-scwartz" },
			{ path: "podcast/episode-62-leo-scwartz", component: PodcastEp62Component },
			{ path: "podcast/episode-63-julie-owono.html", redirectTo: "podcast/episode-63-julie-owono" },
			{ path: "podcast/episode-63-julie-owono", component: PodcastEp63Component },
			{ path: "podcast/episode-64-sonny-king.html", redirectTo: "podcast/episode-64-sonny-king" },
			{ path: "podcast/episode-64-sonny-king", component: PodcastEp64Component },
			{ path: "podcast/episode-65-alexander-klus.html", redirectTo: "podcast/episode-65-alexander-klus" },
			{ path: "podcast/episode-65-alexander-klus", component: PodcastEp65Component },
			{ path: "podcast/episode-66-jason-rieff.html", redirectTo: "podcast/episode-66-jason-rieff" },
			{ path: "podcast/episode-66-jason-rieff", component: PodcastEp66Component },
			{ path: "podcast/episode-67-brett-solomon.html", redirectTo: "podcast/episode-67-brett-solomon" },
			{ path: "podcast/episode-67-brett-solomon", component: PodcastEp67Component },
			{ path: "newsletter-signup", component: NewsletterSignupPage },
			{ path: "newsletter-signup.html", redirectTo: 'newsletter-signup' },
			{ path: "quiz", component: QuizComponent },
			{ path: "quiz.html", redirectTo: 'quiz' },
			{ path: "slides-2021", component: Slides2021Component },
			{ path: "slides-2021.html", redirectTo: 'slides-2021' },
			{ path: "priv8", component: Priv8, data: { purpleLayout: true } },
			{ path: "priv8.html", redirectTo: 'priv8' },
			{ path: "priv8-signup", component: Priv8Signup },
			{ path: "priv8-signup.html", redirectTo: 'priv8-signup' },
			{ path: "**", component: NotFoundComponent }
		]
	},
	{ path: "index.html", redirectTo: "" },
];
