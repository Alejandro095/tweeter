import Layout from "@layout/base"
import AsideTweets from "@layout/aside-tweets";
import AsideNavigation from "@shared/aside-navigation"

import ProfileInformation from "@shared/profile-information"

import styles from "./styles.module.scss"
import { useRouter } from "next/router";

const routes = [
    {title:"Tweets",              pathname:"/[profile]/"},
    {title:"Tweets y respuestas", pathname:"/[profile]/replies"},
    {title:"Fotos y videos",      pathname:"/[profile]/media"},
    {title:"Me gusta",            pathname:"/[profile]/likes"}
]

export default function ProfileView({content}) {

    const { query } = useRouter();

    return (
        <Layout>

            <ProfileInformation />
            
            <div className={styles.margin}>
                <AsideTweets 
                    aside={() => <AsideNavigation routes={routes} query={{ profile: query.profile }} />} 
                    tweets={() => 

                    <>
                        <section>{content}</section>
                        <section>Hola</section>
                        <section>Hola</section>
                        <section>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin scelerisque commodo. Fusce ligula leo, dignissim sed euismod in, varius ac ligula. Ut risus turpis, accumsan id tincidunt quis, iaculis pellentesque nulla. Suspendisse rutrum felis non est eleifend, quis interdum tellus malesuada. Ut posuere tincidunt elit ac faucibus. Sed rhoncus metus in commodo consectetur. Nullam quis commodo est, sed cursus dolor. Cras vitae arcu in enim viverra finibus. Donec orci libero, sagittis ac interdum vel, pellentesque et enim. Nullam nec mauris vehicula, porttitor mauris eu, rutrum ipsum. Sed consectetur tincidunt consequat. Praesent vitae enim porta, ullamcorper nulla in, volutpat massa.

Quisque ultricies sed dui vel euismod. Morbi semper nisi in odio auctor luctus. In ut finibus dui. Praesent lacinia leo ac tellus molestie pharetra. Fusce sagittis imperdiet dapibus. Duis mollis ornare viverra. Cras non mauris ligula. Nulla sit amet tellus ut orci pulvinar dapibus.

Integer sed augue sit amet mauris pharetra ornare ac quis nunc. Vivamus nibh magna, auctor vehicula enim eget, hendrerit aliquam ligula. Nulla maximus dolor neque, nec fringilla neque congue a. Donec eget libero erat. Nullam dapibus, felis nec vulputate posuere, nibh ante iaculis arcu, vel fringilla odio turpis eget arcu. Fusce faucibus lacinia scelerisque. Nam commodo ante ut lorem aliquet convallis. Integer volutpat interdum enim, nec varius libero sollicitudin et. Suspendisse potenti. Vivamus pellentesque nec sem quis aliquam.

Vestibulum a nisl vitae ligula dapibus lacinia. Morbi eget urna id tellus molestie porta porttitor sit amet ipsum. Vestibulum sit amet laoreet ipsum, id tempus lorem. Praesent tincidunt risus eget laoreet ornare. Curabitur in ultricies sem. Aliquam cursus, risus non sollicitudin pretium, lacus velit scelerisque erat, id tempus nunc felis quis justo. Aenean rutrum odio at arcu euismod, eget imperdiet felis bibendum. Nulla eget fermentum erat, ac ornare metus. Phasellus lobortis tincidunt odio, non feugiat risus ultricies a. Curabitur eleifend pellentesque ipsum, at suscipit ligula. Nam ut imperdiet sapien, eu sagittis tellus. Ut vestibulum eget augue ut posuere. Nunc eu convallis felis. Fusce sodales lorem id augue egestas commodo. Nam rhoncus nisl magna, eget viverra metus dictum non.

Phasellus lobortis, lacus at facilisis accumsan, lorem arcu posuere leo, at hendrerit nisl ligula in ante. Phasellus rutrum non nulla eu accumsan. Fusce at sollicitudin dolor. Nam ultrices imperdiet massa, sed porttitor ex accumsan et. Duis finibus vel diam eu tempus. Donec tristique dui eget elit dapibus ornare. Nunc nunc felis, egestas ut magna ac, venenatis pharetra augue. Mauris leo nisl, aliquam et porta vitae, dignissim ullamcorper tortor.

Donec accumsan faucibus dapibus. Pellentesque quis fringilla erat, ac tincidunt magna. In convallis purus iaculis augue facilisis bibendum. Sed elit odio, consectetur ac tempor eu, volutpat in velit. Pellentesque ut ultricies metus. Sed at arcu iaculis, tincidunt sem at, porta ex. Sed posuere, lacus in euismod cursus, metus libero varius sem, sed porttitor justo justo quis lacus. Nulla facilisi.

Nam facilisis dolor vel purus elementum, nec pulvinar ipsum elementum. Quisque vestibulum nunc nunc, quis pellentesque nibh accumsan et. Morbi posuere mi a sem interdum ultrices. Etiam dapibus, mi vitae efficitur commodo, nunc erat varius metus, et consequat mauris purus sit amet lorem. Aliquam ac sem quis justo semper consectetur. Sed sodales pulvinar imperdiet. Fusce ut elit eget neque accumsan ullamcorper vel sed velit. Cras in dapibus velit. Nullam in ex ut nisi tempor ultrices et vel ante. Maecenas bibendum nisi nec viverra commodo. Pellentesque euismod volutpat nulla vitae consequat. Donec aliquam tempor elit malesuada sollicitudin. Nunc vulputate, eros ut tincidunt posuere, turpis dolor posuere ipsum, et porta erat purus nec sem. Suspendisse dapibus sollicitudin urna, a suscipit velit rutrum at.

Duis laoreet turpis eros, eu sollicitudin nunc vestibulum et. Donec tempor auctor mi. Nam euismod velit nec mattis scelerisque. Mauris a vulputate orci, ut rutrum urna. Aliquam elementum vitae sem a pretium. Etiam finibus nec risus sit amet rutrum. Proin ac elementum arcu, at ultrices eros. Maecenas quis enim felis. Vivamus bibendum est vitae pharetra malesuada. Curabitur ac nisl in eros mattis ultrices. Duis blandit lorem leo, et ornare urna tincidunt eget. Nullam tempus nisl nisi, non bibendum risus euismod ac. Suspendisse aliquet sapien magna, sed lacinia nunc tempor et.

Mauris aliquet tortor elit, at porttitor orci porttitor ac. Sed tempus sem quis sapien mollis, ut vulputate nisi pretium. Maecenas ullamcorper dolor ac eros blandit posuere. Nunc vitae ante aliquam, elementum risus non, tempor urna. Cras sit amet lobortis turpis. In luctus felis nec luctus faucibus. Phasellus molestie nibh sed est varius elementum. Vivamus feugiat purus eu arcu iaculis, ut fermentum velit ullamcorper. Pellentesque elementum metus massa. Curabitur pellentesque pretium justo, at hendrerit ipsum congue non. Integer sed nibh nisi. Ut blandit justo vel gravida facilisis. Quisque eu sodales odio, mattis dictum metus. Suspendisse non ante in ipsum eleifend lobortis. In id porta velit. Ut id erat eleifend felis rhoncus pellentesque quis sed velit.

Integer feugiat suscipit nunc. Nulla facilisi. Morbi eu mattis metus, eu interdum enim. Nulla tincidunt imperdiet augue at lacinia. Proin vel dignissim purus. Maecenas molestie pretium elit eget imperdiet. Etiam mattis dignissim sem, euismod tincidunt nulla blandit sed. Sed at purus non ligula porta porttitor. Nam sed commodo massa. Morbi malesuada mauris eu leo efficitur egestas. Aenean posuere tristique sollicitudin. In fringilla vestibulum erat, sit amet consectetur purus mollis in.</section>
                    </>
                
                } />
            </div>

        </Layout>
    )
}