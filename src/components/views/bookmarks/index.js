import Layout from "@layout/base"
import AsideTweets from "@layout/aside-tweets";
import AsideNavigation from "@shared/aside-navigation"

import ProfileInformation from "@shared/profile-information"

import styles from "./styles.module.scss"

const routes = [
    {title:"Tweets", pathname:"/bookmarks"},
    {title:"Tweets y respuestas", pathname:"/bookmarks/replies"},
    {title:"Fotos y videos", pathname:"/bookmarks/media"},
    {title:"Me gusta", pathname:"/bookmarks/likes"}
]

export default function BookmarksView() {
    return (
        <Layout>
            
            <div>
                <AsideTweets 
                    aside={() => <AsideNavigation routes={routes} />} 
                    tweets={() =>     <article>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus libero nec sapien tempus, non sagittis orci semper. Maecenas at nulla in diam commodo ornare. Fusce consequat finibus urna, vitae egestas ex consectetur a. Donec urna ex, mollis a rutrum id, facilisis quis mi. Curabitur sollicitudin, metus vitae egestas faucibus, mauris tellus varius ipsum, sit amet auctor lacus ipsum ut lacus. Duis sem risus, bibendum vel lobortis sed, semper non lorem. Suspendisse non viverra sapien, sollicitudin lacinia ipsum. Donec non dapibus magna. Integer lacinia interdum erat quis dictum. Quisque orci dolor, sollicitudin et gravida non, facilisis tempus leo. Pellentesque sodales libero id justo fringilla, sit amet viverra quam pharetra. Aliquam erat volutpat. Suspendisse nulla est, pretium eget leo in, eleifend venenatis ex. Duis pulvinar vulputate tortor, nec commodo eros ultrices nec. Sed justo quam, venenatis quis luctus mollis, pretium aliquam diam.

Praesent in fermentum ex. Praesent tempor in diam eu dignissim. Morbi mi ipsum, gravida eu metus sollicitudin, ultricies semper orci. Nulla aliquam quis purus vitae vestibulum. Maecenas tellus magna, venenatis id lorem at, vestibulum faucibus sapien. Fusce ultrices ligula ac diam euismod feugiat. Aliquam rutrum convallis nunc id consectetur.

Ut sit amet nulla gravida, ullamcorper enim at, fringilla erat. Sed at pellentesque lorem, sit amet blandit tellus. Nunc libero erat, vestibulum nec nisl sit amet, pulvinar placerat libero. Suspendisse potenti. Sed vel accumsan dui. Morbi non tempus est. Praesent sem ante, tristique vitae enim ut, sagittis laoreet dui. In hac habitasse platea dictumst. Praesent ac rhoncus nulla, at malesuada purus. Sed molestie facilisis ex, ac aliquam mauris consectetur sit amet. Etiam suscipit ante ut eros dictum, sed malesuada ligula accumsan.

Fusce cursus risus ac nulla tincidunt elementum. Integer diam diam, hendrerit ac viverra id, cursus ut arcu. Aliquam fringilla viverra odio, vel rutrum lacus consequat nec. Integer tempus maximus dui, vitae finibus dui viverra ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero id eros viverra auctor quis sed sapien. Ut tincidunt ultrices fermentum. Pellentesque ullamcorper turpis tellus, quis pretium turpis sodales sed. Curabitur in mollis justo. Pellentesque mauris nisi, iaculis id justo vel, imperdiet commodo est. Sed interdum dignissim nunc, in blandit ligula gravida eu. Nam lectus ligula, semper mattis viverra at, aliquet nec mauris. Integer in vestibulum magna. Praesent quis ligula at orci dictum maximus. Suspendisse quis nisi a ex viverra facilisis. In risus tortor, cursus sit amet dui sit amet, pellentesque egestas tortor.

Vivamus et eros finibus, efficitur eros viverra, scelerisque nisl. Praesent eget dolor vel orci ultrices porta. Etiam consectetur ligula convallis justo pretium iaculis. Pellentesque a elit sagittis, varius orci eget, hendrerit enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut blandit justo massa, sed ornare ante fringilla vitae. Nulla non nulla vitae orci eleifend consectetur.

Generados 5 pá
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus libero nec sapien tempus, non sagittis orci semper. Maecenas at nulla in diam commodo ornare. Fusce consequat finibus urna, vitae egestas ex consectetur a. Donec urna ex, mollis a rutrum id, facilisis quis mi. Curabitur sollicitudin, metus vitae egestas faucibus, mauris tellus varius ipsum, sit amet auctor lacus ipsum ut lacus. Duis sem risus, bibendum vel lobortis sed, semper non lorem. Suspendisse non viverra sapien, sollicitudin lacinia ipsum. Donec non dapibus magna. Integer lacinia interdum erat quis dictum. Quisque orci dolor, sollicitudin et gravida non, facilisis tempus leo. Pellentesque sodales libero id justo fringilla, sit amet viverra quam pharetra. Aliquam erat volutpat. Suspendisse nulla est, pretium eget leo in, eleifend venenatis ex. Duis pulvinar vulputate tortor, nec commodo eros ultrices nec. Sed justo quam, venenatis quis luctus mollis, pretium aliquam diam.

Praesent in fermentum ex. Praesent tempor in diam eu dignissim. Morbi mi ipsum, gravida eu metus sollicitudin, ultricies semper orci. Nulla aliquam quis purus vitae vestibulum. Maecenas tellus magna, venenatis id lorem at, vestibulum faucibus sapien. Fusce ultrices ligula ac diam euismod feugiat. Aliquam rutrum convallis nunc id consectetur.

Ut sit amet nulla gravida, ullamcorper enim at, fringilla erat. Sed at pellentesque lorem, sit amet blandit tellus. Nunc libero erat, vestibulum nec nisl sit amet, pulvinar placerat libero. Suspendisse potenti. Sed vel accumsan dui. Morbi non tempus est. Praesent sem ante, tristique vitae enim ut, sagittis laoreet dui. In hac habitasse platea dictumst. Praesent ac rhoncus nulla, at malesuada purus. Sed molestie facilisis ex, ac aliquam mauris consectetur sit amet. Etiam suscipit ante ut eros dictum, sed malesuada ligula accumsan.

Fusce cursus risus ac nulla tincidunt elementum. Integer diam diam, hendrerit ac viverra id, cursus ut arcu. Aliquam fringilla viverra odio, vel rutrum lacus consequat nec. Integer tempus maximus dui, vitae finibus dui viverra ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero id eros viverra auctor quis sed sapien. Ut tincidunt ultrices fermentum. Pellentesque ullamcorper turpis tellus, quis pretium turpis sodales sed. Curabitur in mollis justo. Pellentesque mauris nisi, iaculis id justo vel, imperdiet commodo est. Sed interdum dignissim nunc, in blandit ligula gravida eu. Nam lectus ligula, semper mattis viverra at, aliquet nec mauris. Integer in vestibulum magna. Praesent quis ligula at orci dictum maximus. Suspendisse quis nisi a ex viverra facilisis. In risus tortor, cursus sit amet dui sit amet, pellentesque egestas tortor.

Vivamus et eros finibus, efficitur eros viverra, scelerisque nisl. Praesent eget dolor vel orci ultrices porta. Etiam consectetur ligula convallis justo pretium iaculis. Pellentesque a elit sagittis, varius orci eget, hendrerit enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut blandit justo massa, sed ornare ante fringilla vitae. Nulla non nulla vitae orci eleifend consectetur.

Generados 5 pá
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus libero nec sapien tempus, non sagittis orci semper. Maecenas at nulla in diam commodo ornare. Fusce consequat finibus urna, vitae egestas ex consectetur a. Donec urna ex, mollis a rutrum id, facilisis quis mi. Curabitur sollicitudin, metus vitae egestas faucibus, mauris tellus varius ipsum, sit amet auctor lacus ipsum ut lacus. Duis sem risus, bibendum vel lobortis sed, semper non lorem. Suspendisse non viverra sapien, sollicitudin lacinia ipsum. Donec non dapibus magna. Integer lacinia interdum erat quis dictum. Quisque orci dolor, sollicitudin et gravida non, facilisis tempus leo. Pellentesque sodales libero id justo fringilla, sit amet viverra quam pharetra. Aliquam erat volutpat. Suspendisse nulla est, pretium eget leo in, eleifend venenatis ex. Duis pulvinar vulputate tortor, nec commodo eros ultrices nec. Sed justo quam, venenatis quis luctus mollis, pretium aliquam diam.

Praesent in fermentum ex. Praesent tempor in diam eu dignissim. Morbi mi ipsum, gravida eu metus sollicitudin, ultricies semper orci. Nulla aliquam quis purus vitae vestibulum. Maecenas tellus magna, venenatis id lorem at, vestibulum faucibus sapien. Fusce ultrices ligula ac diam euismod feugiat. Aliquam rutrum convallis nunc id consectetur.

Ut sit amet nulla gravida, ullamcorper enim at, fringilla erat. Sed at pellentesque lorem, sit amet blandit tellus. Nunc libero erat, vestibulum nec nisl sit amet, pulvinar placerat libero. Suspendisse potenti. Sed vel accumsan dui. Morbi non tempus est. Praesent sem ante, tristique vitae enim ut, sagittis laoreet dui. In hac habitasse platea dictumst. Praesent ac rhoncus nulla, at malesuada purus. Sed molestie facilisis ex, ac aliquam mauris consectetur sit amet. Etiam suscipit ante ut eros dictum, sed malesuada ligula accumsan.

Fusce cursus risus ac nulla tincidunt elementum. Integer diam diam, hendrerit ac viverra id, cursus ut arcu. Aliquam fringilla viverra odio, vel rutrum lacus consequat nec. Integer tempus maximus dui, vitae finibus dui viverra ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero id eros viverra auctor quis sed sapien. Ut tincidunt ultrices fermentum. Pellentesque ullamcorper turpis tellus, quis pretium turpis sodales sed. Curabitur in mollis justo. Pellentesque mauris nisi, iaculis id justo vel, imperdiet commodo est. Sed interdum dignissim nunc, in blandit ligula gravida eu. Nam lectus ligula, semper mattis viverra at, aliquet nec mauris. Integer in vestibulum magna. Praesent quis ligula at orci dictum maximus. Suspendisse quis nisi a ex viverra facilisis. In risus tortor, cursus sit amet dui sit amet, pellentesque egestas tortor.

Vivamus et eros finibus, efficitur eros viverra, scelerisque nisl. Praesent eget dolor vel orci ultrices porta. Etiam consectetur ligula convallis justo pretium iaculis. Pellentesque a elit sagittis, varius orci eget, hendrerit enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut blandit justo massa, sed ornare ante fringilla vitae. Nulla non nulla vitae orci eleifend consectetur.

Generados 5 pá
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam maximus libero nec sapien tempus, non sagittis orci semper. Maecenas at nulla in diam commodo ornare. Fusce consequat finibus urna, vitae egestas ex consectetur a. Donec urna ex, mollis a rutrum id, facilisis quis mi. Curabitur sollicitudin, metus vitae egestas faucibus, mauris tellus varius ipsum, sit amet auctor lacus ipsum ut lacus. Duis sem risus, bibendum vel lobortis sed, semper non lorem. Suspendisse non viverra sapien, sollicitudin lacinia ipsum. Donec non dapibus magna. Integer lacinia interdum erat quis dictum. Quisque orci dolor, sollicitudin et gravida non, facilisis tempus leo. Pellentesque sodales libero id justo fringilla, sit amet viverra quam pharetra. Aliquam erat volutpat. Suspendisse nulla est, pretium eget leo in, eleifend venenatis ex. Duis pulvinar vulputate tortor, nec commodo eros ultrices nec. Sed justo quam, venenatis quis luctus mollis, pretium aliquam diam.

Praesent in fermentum ex. Praesent tempor in diam eu dignissim. Morbi mi ipsum, gravida eu metus sollicitudin, ultricies semper orci. Nulla aliquam quis purus vitae vestibulum. Maecenas tellus magna, venenatis id lorem at, vestibulum faucibus sapien. Fusce ultrices ligula ac diam euismod feugiat. Aliquam rutrum convallis nunc id consectetur.

Ut sit amet nulla gravida, ullamcorper enim at, fringilla erat. Sed at pellentesque lorem, sit amet blandit tellus. Nunc libero erat, vestibulum nec nisl sit amet, pulvinar placerat libero. Suspendisse potenti. Sed vel accumsan dui. Morbi non tempus est. Praesent sem ante, tristique vitae enim ut, sagittis laoreet dui. In hac habitasse platea dictumst. Praesent ac rhoncus nulla, at malesuada purus. Sed molestie facilisis ex, ac aliquam mauris consectetur sit amet. Etiam suscipit ante ut eros dictum, sed malesuada ligula accumsan.

Fusce cursus risus ac nulla tincidunt elementum. Integer diam diam, hendrerit ac viverra id, cursus ut arcu. Aliquam fringilla viverra odio, vel rutrum lacus consequat nec. Integer tempus maximus dui, vitae finibus dui viverra ut. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis sed libero id eros viverra auctor quis sed sapien. Ut tincidunt ultrices fermentum. Pellentesque ullamcorper turpis tellus, quis pretium turpis sodales sed. Curabitur in mollis justo. Pellentesque mauris nisi, iaculis id justo vel, imperdiet commodo est. Sed interdum dignissim nunc, in blandit ligula gravida eu. Nam lectus ligula, semper mattis viverra at, aliquet nec mauris. Integer in vestibulum magna. Praesent quis ligula at orci dictum maximus. Suspendisse quis nisi a ex viverra facilisis. In risus tortor, cursus sit amet dui sit amet, pellentesque egestas tortor.

Vivamus et eros finibus, efficitur eros viverra, scelerisque nisl. Praesent eget dolor vel orci ultrices porta. Etiam consectetur ligula convallis justo pretium iaculis. Pellentesque a elit sagittis, varius orci eget, hendrerit enim. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Ut blandit justo massa, sed ornare ante fringilla vitae. Nulla non nulla vitae orci eleifend consectetur.

Generados 5 pá
        </article>} />
            </div>

        </Layout>
    )
}