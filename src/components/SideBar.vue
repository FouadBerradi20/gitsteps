<template>
  <aside>
    <ul>
      <li>
        <router-link to="/dashboard/stats">
          <DashboardIcon></DashboardIcon>Dashboard
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/account">
          <LinkIcon />Account
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/setting">
          <SettingIcon />Setting
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/tutorials">
          <VideoTutorialIcon></VideoTutorialIcon>Tutorials
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard/support">
          <SupportIcon></SupportIcon>Support
        </router-link>
      </li>
    </ul>
  </aside>
</template>

<script>
import DashboardIcon from '@/components/icons/DashboardIcon'
import LinkIcon from '@/components/icons/LinkIcon'
import SettingIcon from '@/components/icons/SettingIcon'
import SupportIcon from '@/components/icons/SupportIcon'
import VideoTutorialIcon from '@/components/icons/VideoTutorialIcon'
export default {
  components: {
    DashboardIcon,
    LinkIcon,
    SettingIcon,
    SupportIcon,
    VideoTutorialIcon
  }
}
</script>

