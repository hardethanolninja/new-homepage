import Image from "next/image";
import Link from "next/link";

import npsotOld from "../../../public/npsot/npsot-old.png";
import npsotNew from "../../../public/npsot/npsot-new.png";
import npsotScore from "../../../public/npsot/npsot-score.png";
import npsotLogin from "../../../public/npsot/npsot-login.png";
import npsot404 from "../../../public/npsot/npsot-404.png";
import npsotMap from "../../../public/npsot/npsot-map.png";
import npsotPlant from "../../../public/npsot/native-plant.webp";
import Footer from "@/components/Footer";

const imgStyle = {
  width: "75%",
  height: "600px",
  objectFit: "cover",
  objectPosition: "top",
  margin: "auto",
  marginTop: "12px",
  borderRadius: "10px",
};

function page() {
  return (
    <>
      <div className='p-4 lg:p-24'>
        <h2 className='pt-20 lg:pt-8 lg:pb-8'>
          Native Plant Society of Texas Website Redesign
        </h2>
        <h4 className='text-dark-blue'>Intro</h4>
        <p>
          I was contacted by the VP of Communications at the Native Plant
          Society of Texas to assist with their WordPress site. It had been
          active since 2006, and their current Webmaster was stepping down. I
          had very little experience with WordPress or PHP at this point, so I
          thought it would be a great learning opportunity. Their structure was
          a main state-level website with 30 multi-sites for local chapters.
        </p>
        <Image
          src={npsotOld}
          alt='NPSOT old website homepage'
          style={imgStyle}
          className='mx-auto rounded-lg shadow-lg'
        ></Image>
        <h4 className='text-dark-green'>Tasks</h4>
        <p>
          I sat down with the VP of Communications to discuss their needs.
          Initially they had four asks:
        </p>
        <ul className='pl-8 my-4 list-disc'>
          <li>Help speed up the website</li>
          <li>Help reduce the number of crashes</li>
          <li>Help reduce the number of unauthorized login attempts</li>
          <li>Help improve the design of the site</li>
        </ul>
        <p>
          After a few days of reviewing the site, it was clear that the issues
          were more than surface level minor problems.
        </p>
        <p>
          First, the site was using nearly 100 WordPress plugins. There were
          many cross-compatibility errors causing frequent site crashes that
          required them to contact their hosting site to be restored to a
          previous version. Unfortunately there was so much reliance on plugins
          instead of custom code, it was impossible to deconflict everything.
          This was also causing a huge slowdown in the site.
        </p>
        <p>
          Secondly, they were using the default WordPress login URL and had no
          CAPTCHA or automated solution to prevent login attempts by bots. Their
          ~50 active content creator accounts had thousands of login attempts
          every day. This was slowing the site and was a risk for them to lose
          15 years of content.
        </p>
        <p>
          Thirdly, I recommended that they move to a better host. They were
          using a budget host for an enormous site, with tens of thousands of
          monthly pageviews. They were often exceeding the soft-cap limit that
          their host provided.
        </p>
        <p>
          Lastly, they were using a design plugin that utilized very old web
          standards, did not allow for global CSS, and had non-existent
          documentation.
        </p>
        <h4 className='text-dark-blue'>Approach</h4>
        <p>
          I had a few suggestions on how they could greatly improve the design,
          safety, speed, and security of their website. They also asked for some
          help building a searchable database of native plants that they could
          use at plant sales and committee meetings.
        </p>
        <p>
          We agreed that the front-end had to go. I suggested and NPSOT agreed
          to use Elementor as the design plugin. This would ensure that any
          future changes would be easier for Webmasters to manage, and would
          give them a respected, robust solution that would be relatively
          futureproof.
        </p>
        <p>
          We agreed to end the use of multisites for chapter pages. This gave
          the website a cohesive feel and reduced the strain on local chapters
          to manage their site. This enabled them to be content creators
          instead. Additionally, it allowed local chapters to hook into state
          level content, like the native plant database, the calendar, and even
          posts for upcoming events.
        </p>
        <h4 className='text-dark-green'>Solutions</h4>
        <h5>Design</h5>
        <p>
          Design in Elementor is mostly WYSIWYG. I set up some custom templates
          for Pages, Posts, Archives, and a 404 page. I also designed a splash
          page for their homepage that was much more bold and highlighted who
          they were.
        </p>
        <Image
          src={npsot404}
          alt='NPSOT 404 page'
          style={imgStyle}
          className='mx-auto rounded-lg shadow-lg'
        ></Image>
        <h5>Security</h5>
        <p>
          I wrote a plugin in PHP to customize their login URL. This will reduce
          the number of bot login attempts that target the default WordPress
          login URL.
        </p>
        <p>
          I also added a Google CAPTCHA to their login. The result was zero
          unauthorized attempts during the last 60 days that I worked on the
          project.
        </p>
        <Image
          src={npsotLogin}
          alt='NPSOT login page'
          style={imgStyle}
          className='mx-auto rounded-lg shadow-lg'
        ></Image>
        <h5>Custom Functionality</h5>
        <Link
          target='_blank'
          href='https://github.com/hardethanolninja/npsot-code/'
          className='text-light-green'
        >
          GitHub for this project
        </Link>
        <p>
          Texas is comprised of 11 distinct ecoregions. Utilizing the{" "}
          <Link
            target='_blank'
            alt='USEPA API'
            href='https://geodata.epa.gov/arcgis/rest/services/ORD/USEPA_Ecoregions_Level_III_and_IV/MapServer/7'
          >
            USEPA ecoregions API
          </Link>{" "}
          and{" "}
          <Link target='_blank' alt='Leaflet.js' href='https://leafletjs.com/'>
            Leaflet
          </Link>{" "}
          I created a map that users can interact with to learn more about the
          ecoregion they live in.
        </p>
        <Link
          target='_blank'
          alt='NPSOT ecoregion map'
          href='https://www.npsot.org/resources/native-plants/ecoregion-map/'
        >
          <Image
            src={npsotMap}
            alt='NPSOT ecoregion map'
            style={imgStyle}
            className='mx-auto rounded-lg shadow-lg'
          ></Image>
        </Link>
        <p>
          One of the biggest, most challenging, and honestly most fun parts of
          this project was designing a database for native plants that members
          and the general public could use. The mission of NPSOT is to share
          knowledge about Texas natives, but they didn't have a succinct, easily
          accessible way to do it.
        </p>
        <p>
          Most of the database customization was done using the Advanced Custom
          Fields plugin. I wanted to ensure that future Webmasters would have no
          issue adding, editing, and deleting fields.
        </p>
        <Image
          src={npsotPlant}
          alt='NPSOT native plant'
          style={imgStyle}
          className='mx-auto rounded-lg shadow-lg'
        ></Image>
        <p>
          I wrote a{" "}
          <Link
            target='blank'
            alt='PHP form'
            href='https://github.com/hardethanolninja/npsot-code/blob/master/nativePlantInputForm.php'
          >
            PHP form
          </Link>{" "}
          that would allow any logged in user to submit a plant for review to be
          entered in the database.
        </p>
        <p>
          I also wanted to have a map of Texas that showed the ideal ecoregions
          for the plant. Utilizing the database entries and the USEPA API, the{" "}
          <Link
            target='blank'
            alt='map code'
            href='https://github.com/hardethanolninja/npsot-code/blob/master/nativePlantEcomap.html'
          >
            map is generated automatically
          </Link>{" "}
          for each plant.
        </p>
        <h4 className='text-dark-blue'>Result</h4>
        <Link
          target='_blank'
          alt='NPSOT new homepage'
          href='https://www.npsot.org/'
        >
          <Image
            src={npsotNew}
            alt='NPSOT new homepage'
            style={imgStyle}
            className='mx-auto rounded-lg shadow-lg'
          ></Image>
        </Link>
        <p>
          After six months of collaboration and hard work, the new website was
          launched. I stayed on the project for a few more months to help with
          transition and work out any bugs. After 18 months total, it was time
          for me to move on to other projects.
        </p>
        <Image
          src={npsotScore}
          alt='NPSOT new score'
          style={imgStyle}
          className='mx-auto rounded-lg shadow-lg'
        ></Image>
        <p>
          The new site is fast, stable, and has much more functionality than the
          old one.
        </p>
      </div>
      <Footer />
    </>
  );
}

export default page;
