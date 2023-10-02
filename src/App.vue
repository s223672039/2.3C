<template>
  <div>
    <!-- 1. Template Syntax -->
    <h1>{{ message }}</h1>
    <div v-html="rawHTML"></div>
    <div :id="elementId">{{ dynamicAttribute }}</div>

    <!-- 5. Class and Style Bindings -->
    <div :class="{ 'active': isActive, 'error': hasError }" :style="{ color: textColor }">Class and Style Bindings</div>

    <!-- 6. List Rendering -->
    <ul>
      <li v-for="(item, key) in objectList" :key="key">{{ key }}: {{ item }}</li>
      <li v-for="n in 5" :key="n">Item {{ n }}</li>
      <template v-for="(item, index) in items" :key="index">
        <li>{{ item }}</li>
      </template>
      <li v-for="(item, key) in filteredItems" :key="key">{{ item }}</li> <!-- d. v-for with v-if -->
      <child-component v-for="(component, index) in components" :key="index" :name="component.name"></child-component>
    </ul>

    <!-- 7. Event Handling -->
    <button @click="sayHello">hey</button>
    <button @click="inlineHandler">Inline Handler</button>
    <button @click="methodHandler">Method Handler</button>

    <!-- 8. Form Input Bindings -->
    <input type="text" v-model="textModel" />
    <input type="checkbox" v-model="checkboxModel" />
    <input type="radio" v-model="radioModel" :value="radioOption1" />
    <select v-model="selectedOption">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
    <textarea v-model="textareaModel"></textarea>

    <!-- 9. Watchers -->
    <p>Reactive Value: {{ reactiveValue }}</p>

    <!-- 10. Components -->
    <child-component :name="computedValue" @custom-event="handleCustomEvent"></child-component>

    <!-- 2. Methods -->
    <button @click="callMethod">Call Method</button>

    <!-- 11. Router -->
    <!-- Navigation Links -->
    <router-link to="/about">About</router-link>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import ChildComponent from './components/ChildComponent.vue';

// 1. Template Syntax
const message = ref('Welcome!!!!');
const rawHTML = '<span style="color: red;">Hello SIT 120 CREDIT TASK</span>';
const elementId = 'unique-id';

// 3. Reactivity Fundamentals
const reactiveValue = ref(0);

// 4. Computed Properties
const a = 2;
const b = 3;
const computedValue = computed(() => a + b);

// 5. Class and Style Bindings
const isActive = ref(true);
const hasError = ref(false);
const textColor = 'blue';

// 6. List Rendering
const objectList = { a: '1.1P', b: '1.2P', c: '1.3P' };
const items = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3];
const components = [{ id: 1.1, name: 'Component A' }, { id: 2.1, name: 'Component B' }];
const shouldShow = (item) => item > 1;

// 8. Form Input Bindings
const textModel = ref('');
const checkboxModel = ref(false);
const radioModel = ref('option1');
const selectedOption = ref('option1');
const textareaModel = ref('');

// 9. Watchers
watch(textModel, (newValue, oldValue) => {
  console.log('Text Model Watcher:', newValue, oldValue);
});

// 7. Event Handling
const sayHello = () => {
  alert('Hello!');
};
const inlineHandler = () => {
  alert('Inline Handler');
};
const methodHandler = () => {
  alert('Method Handler');
};

// 10. Components
const handleCustomEvent = (data) => {
  console.log('Custom event received:', data);
};

// 2. Methods
const callMethod = () => {
  alert('Method Called');
};
</script>
<style scoped>
/* Header styles */
h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

/* Text with raw HTML styles */
.raw-html {
  font-weight: bold;
  color: blue;
}

/* Dynamic attribute styles */
.dynamic-attribute {
  font-style: italic;
}

/* Class and Style Bindings styles */
.active {
  background-color: green;
}

.error {
  color: red;
}

/* List Rendering styles */
ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin-bottom: 5px;
}

/* Event Handling buttons */
.button-container {
  margin-top: 20px;
}

/* Form Input Bindings styles */
input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

input[type="checkbox"],
input[type="radio"] {
  margin-right: 5px;
}

/* Watchers and Computed Property styles */
p {
  font-weight: bold;
}

/* Child Component styles */
.child-component {
  border: 1px solid #ccc;
  padding: 10px;
  margin-top: 20px;
}

/* Router Link styles */
.router-links {
  margin-top: 20px;
}
</style>
