### Configuration Instructions

Applicable Software: [Loon](https://apps.apple.com/app/loon/id1373567447)

Configuration Author: [可莉🅥](https://t.me/iKeLee)

Update Date: Refer to the configuration file

Applicable Version: Latest version on App Store

### Importing Configuration

#### Clicking the link below will immediately start importing the configuration file and ask if you really want to import it. Please confirm before importing.

#### You should back up your current configuration file before importing: click [Configuration] → [Export] → [Save to "Files"]


### Inventory of Configuration Files

[Auto-Select config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_Auto-Select_Configuration_By_iKeLee.conf) - This configuration file empowers you with automatic selection of the node boasting the lowest latency, eliminating the need for manual intervention. The entire process unfolds seamlessly and autonomously. 

[Advanced config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_Advanced_Configuration_By_iKeLee.conf) - This configuration file empowers you with automatic selection of the node exhibiting the lowest latency, eliminating the need for manual intervention. The entire process unfolds seamlessly and autonomously. When connecting to a router equipped with a transparent proxy, your Loon will establish a connection via the "DIRECT" strategy, leveraging your router to access restricted websites. Conversely, when utilizing other networks, Loon will facilitate access to these websites through its own proxy. This intelligent approach prevents the redundant proxy scenario that can arise when connecting to a router already employing a transparent proxy. 

[Manual node selection config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_Selection_Configuration_By_iKeLee.conf) - This configuration file requires you to manually select your desired node. It will not automatically switch nodes in the event of a proxy server failure, necessitating your intervention to choose a functioning alternative. 

[Simple config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_Simple_Configuration_By_iKeLee.conf) - This configuration file is designed for simplicity, featuring a single policy group. Its straightforward nature allows for effortless setup and immediate usability. 

[Basic config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_Basic_Configuration_By_iKeLee.conf) - This configuration file is a barebones foundation, devoid of any policy groups. Its purpose is twofold: to serve as a baseline for troubleshooting software issues and as a starting point for building your own customized configuration files. 

[tvOS config](loon://import?sub=https://gitlab.com/lodepuly/vpn_tool/-/raw/master/Tool/Loon/Config/Loon_tvOS_Configuration_By_iKeLee.conf) - This configuration file is specifically designed for tvOS and includes a mix of policy groups. Some of these groups automatically select the optimal node for you, while others give you the freedom to choose your preferred node manually. 

### Usage Instructions

1. After importing the configuration, please [switch to automatic flow mode](https://www.nsloon.com/openloon/flowmodel=filter).

2. Go to the [Configuration] interface and turn on the switches for [Script], [Rewrite], and [MitM].

3. Install and trust the certificate.

4. Add your subscription.

5. Turn on Loon and start surfing! 