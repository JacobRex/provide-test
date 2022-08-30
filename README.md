# Provide/Inject Test
This repo demonstrates how to leverage provide/inject to show modals, alerts and other overlay components. The intent is for every application to have a `Layout` at its root, which includes multiple layers and mixins for providing the api for those layers. Views then open layers by injecting the layer api from a parent layer and running its open method.

## Demo
To open a layer, you put a layout in the root of the app, and then your view injects the layer's API and runs its open method.

_App.vue_
```vue
<template>
  <Layout>
    <router-view />
  </Layout>
</template>
```

_MyView.vue_
```vue
<template>
  <Button @click="openModal">
    Open Modal
  </Button>
</template>
<script>
// ...
@Inject() modalLayer!: ModalApi
openModal() {
    this.modalLayer.open(MyModalComponent, { props });
}
</script>
```

### Pros vs Portal
* Strictly enforced mounting points. Modals ALWAYS mount to modal layers
* Less manual template code and const logic
* Can provide an API
* API's can be extended/versioned whereas manual implementations cannot
* Can nest layers

### Cons vs Provide/Inject
* Requires a parent/child structure
* Must remember to inject in the view and or modal
* Learning curve likely required for using provide/inject

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```