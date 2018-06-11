<template src="./{{name}}.{{ filesType.html }}"></template>
<script src="./{{name}}.{{ filesType.script }}"{% if filesType.script !="js" %} lang="{{ filesType.script }}"{% endif %}></script>
<style src="./{{name}}.{{ filesType.style }}" scoped lang="{{ filesType.style }}"></style>

