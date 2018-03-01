<template src="./{{name}}.component.{{ filesType.html }}"></template>
<script src="./{{name}}.component.{{ filesType.script }}" lang="{{ filesType.script }}"></script>
<script src="./{{name}}.component.{{ filesType.script }}"{% if filesType.script !="js" %} lang="{{ filesType.script }}"{% endif %}></script>
<style src="./{{name}}.component.{{ filesType.style }}" scoped lang="{{ filesType.style }}"></style>

