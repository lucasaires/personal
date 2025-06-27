# Componentes Reutilizáveis

Esta pasta contém os componentes reutilizáveis do projeto, seguindo as melhores práticas de desenvolvimento React/Next.js.

## Estrutura dos Componentes

### 🔧 Componentes de Layout
- **`PageLayout`** - Layout base para todas as páginas
- **`Header`** - Cabeçalho com navegação principal

### 📋 Componentes de Conteúdo
- **`ProjectCard`** - Card para exibição de projetos
- **`ContactForm`** - Formulário de contato
- **`ContactInfo`** - Informações de contato
- **`SkillsSection`** - Seção de habilidades
- **`ExperienceSection`** - Seção de experiências profissionais

## Vantagens da Componentização

✅ **Reutilização**: Elimina duplicação de código  
✅ **Manutenibilidade**: Mudanças em um local refletem em todo o projeto  
✅ **Testabilidade**: Componentes podem ser testados isoladamente  
✅ **Consistência**: Garante uniformidade visual e funcional  
✅ **Escalabilidade**: Facilita adição de novas funcionalidades  

## Como Usar

```tsx
import { PageLayout, ProjectCard, ContactForm } from "@/components";

export default function MyPage() {
  return (
    <PageLayout currentPage="projects">
      <ProjectCard {...projectData} />
      <ContactForm />
    </PageLayout>
  );
}
```

## Padrões Seguidos

- **Single Responsibility**: Cada componente tem uma responsabilidade única
- **Composição**: Componentes pequenos que podem ser combinados
- **Props Interface**: TypeScript para tipagem consistente
- **Naming Convention**: Nomes descritivos e consistentes
- **Export/Import**: Barrel exports para imports limpos
