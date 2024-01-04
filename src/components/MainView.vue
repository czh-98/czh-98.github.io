<template>
  <div class="main-view">
    <h1>Welcome to my homepage</h1>
    <MainBlock title="Biography">
      <p class="biography">
        I am currently a Ph.D. student in Computer Science at
        <a href="https://www.comp.nus.edu.sg/">School of Computing</a>,
        <a href="https://nus.edu.sg/">National University of Singapore</a>, supervised by Prof.
        <a href="https://scholar.google.com/citations?user=6Lx_eowAAAAJ">Mohan Kankanhalli</a> and supported by
        President's Graduate Fellowship. Prior to join NUS, I received M.Eng in Computer Technology at
        <a href="https://www.sigs.tsinghua.edu.cn/en/"
          >Tsinghua Shenzhen International Graduate School</a
        >, <a href="https://www.tsinghua.edu.cn/en/">Tsinghua University</a>, supervised by Prof.
        <a href="https://scholar.google.com/citations?user=fYdxi2sAAAAJ">Chun Yuan</a>.  Before that, I received B.Eng in Software Engineering from
        <a href="https://cs.bit.edu.cn">School of Computer Science &amp; Technology</a>,
        <a href="https://english.bit.edu.cn/">Beijing Institute of Technology</a>.
      </p>
      <p class="biography">
        Click <a href="/files/Zenghao_Chai_CV.pdf">here</a> to find my up-to-date CV.
      </p>
    </MainBlock>
    <MainBlock title="Education">
      <div class="education" v-for="(item, index) in educations" :key="index">
        <div>
          <div class="time">{{ item.time }}</div>
          <div v-for="(detail, index) in item.details" :key="index">
            <span>- </span>
            <span v-for="(content, index) in detail" :key="index">
              <span v-if="typeof content === 'string'">{{ content }}</span>
              <span v-else-if="content instanceof Array">
                <a v-if="content[1] === 'link'" :href="content[2]" target="_blank">
                  {{ content[0] }}
                </a>
                <strong v-if="content[1] === 'bold'">{{ content[0] }}</strong>
              </span>
            </span>
          </div>
        </div>
        <img :src="item.logo" alt="" />
      </div>
    </MainBlock>
    <MainBlock title="Work Experience">
      <div class="education" v-for="(item, index) in workExps" :key="index">
        <div>
          <div class="time">{{ item.time }}</div>
          <div v-for="(detail, index) in item.details" :key="index">
            <span>- </span>
            <span v-for="(content, index) in detail" :key="index">
              <span v-if="typeof content === 'string'">{{ content }}</span>
              <span v-else-if="content instanceof Array">
                <a v-if="content[1] === 'link'" :href="content[2]" target="_blank">
                  {{ content[0] }}
                </a>
                <strong v-if="content[1] === 'bold'">{{ content[0] }}</strong>
              </span>
            </span>
          </div>
        </div>
        <div class="work-exp-logo">
          <img :src="item.logo" alt="" />
        </div>
      </div>
    </MainBlock>
    <MainBlock title="Publications and Preprints">
      <p>* indicates equal contributions.</p>
      <div v-for="(publication, index) in publications" :key="index" class="publication">
        <div class="title">{{ publication.title }}</div>
        <div class="authors">
          <span v-for="(author, index) in toAuthorArray(publication.authors)" :key="index">
            <span v-if="index > 0">, </span>
            <span v-if="typeof author === 'string'">{{ author }}</span>
            <strong v-else>{{ author[0] }}</strong>
          </span>
        </div>
        <div class="pub">{{ publication.pub }}</div>
        <div class="resources">
          <a v-for="(resource, index) in publication.resources" :key="index" :href="resource.link">
            <!-- <img :src="resource.icon" :alt="resource.label" /> -->
            <span style="margin-right: 4px">
              <IconView :type="resource.icon" />
            </span>
            <span>{{ resource.label }}</span>
          </a>
        </div>
      </div>
    </MainBlock>
    <MainBlock title="Patents">
      <ul>
        <li v-for="(patent, index) in patents" :key="index">
          <span v-for="(author, index) in toAuthorArray(patent.authors)" :key="index">
            <span v-if="index > 0">, </span>
            <span v-if="typeof author === 'string'">{{ author }}</span>
            <strong v-else>{{ author[0] }}</strong>
          </span>
          <span>. </span>
          <span>{{ patent.info }}</span>
        </li>
      </ul>
    </MainBlock>
    <MainBlock title="Awards and Honors">
      <ul>
        <li v-for="(award, index) in awards" :key="index">
          <span v-for="(content, index) in award" :key="index">
            <span v-if="typeof content === 'string'">{{ content }}</span>
            <span v-else-if="content instanceof Array">
              <strong v-if="content[1] === 'bold'">{{ content[0] }}</strong>
            </span>
          </span>
        </li>
      </ul>
    </MainBlock>
  </div>
</template>

<script setup lang="ts">
import MainBlock from './MainBlock.vue';
import { educations, publications, workExps, patents, awards } from '@/contents';
import IconView from './IconView.vue';

function toAuthorArray(authors: string) {
  const authorArray = authors
    .split(',')
    .map((author) => author.trim())
    .map((author) => {
      if (author.startsWith('Zenghao Chai')) {
        return [author, 'bold'];
      }
      return author;
    });
  return authorArray;
}
</script>

<style scoped>
.main-view {
  padding-left: calc(2rem + 200px);
}

.main-view p {
  text-align: justify;
  line-height: 1.5rem;
}

@media screen and (max-width: 640px) {
  .main-view {
    padding-left: 0;
    margin-top: 2rem;
  }
  .main-view h1 {
    word-break: break-all;
    text-align: center;
    font-size: 28px;
  }
}

.biography a {
  color: var(--link-color);
}

.education {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1rem;
  justify-content: space-between;
}

.education .time {
  font-weight: 600;
}

.education img {
  width: 65px;
  margin-left: 1rem;
}

.education a {
  white-space: normal;
  color: var(--link-color);
}

.work-exp-logo img {
  width: 100px;
}

.publication:not(:first-child) {
  margin-top: 1rem;
}

.publication .title {
  font-weight: 600;
  text-decoration: underline;
}

.publication .resources a {
  display: inline-flex;
  align-items: center;
  border: 1px solid #d9d9d9;
  padding: 0 0.5rem;
  border-radius: 5px;
}

.publication .resources > a:not(:first-child) {
  margin-left: 0.5rem;
}

.publication .resources img {
  width: 16px;
  height: 16px;
  margin-right: 0.25rem;
}

.publication .resources span {
  font-size: 12px;
  line-height: 1.5rem;
}
</style>
