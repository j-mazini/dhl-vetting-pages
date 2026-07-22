# Deployment Guide - Vercel

Este projeto está configurado para ser deployado facilmente na Vercel.

## 🚀 Quick Deploy (Recommended)

### Passo 1: Preparar o repositório
✅ Já feito! O repositório está pronto com:
- Next.js 16 configurado
- App Router
- TypeScript
- Componentes React da landing page

### Passo 2: Deploy na Vercel

#### Opção A: Vercel Dashboard (Easiest)

1. Acesse [vercel.com](https://vercel.com)
2. Clique em **"New Project"**
3. Conecte seu GitHub (selecione seu repositório)
   - GitHub: `j-mazini/dhl-vetting-pages`
4. Configure as variáveis de ambiente:
   - Copie as variáveis do `.env.example` para o dashboard
   - Ou deixe em branco por enquanto (funcionará sem Firebase)
5. Clique **"Deploy"**
6. Aguarde ~3-5 minutos

✅ **URL de Deploy**: `https://dhl-vetting-pages.vercel.app`

#### Opção B: Vercel CLI (Advanced)

```bash
# 1. Instalar Vercel CLI (uma única vez)
npm install -g vercel

# 2. No diretório do projeto
cd /Users/mazinijoaomarcelo/Desktop/pages

# 3. Deploy
vercel

# Seguir as instruções no terminal
```

## 📋 Environment Variables

Se quiser usar Firebase no futuro, adicione essas variáveis no dashboard da Vercel:

```
NEXT_PUBLIC_FIREBASE_API_KEY=sua_chave_aqui
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_dominio_aqui
NEXT_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_aqui
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_bucket_aqui
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=seu_sender_id_aqui
NEXT_PUBLIC_FIREBASE_APP_ID=seu_app_id_aqui
NEXT_PUBLIC_CONTACT_EMAIL=contact@seu-email.com
```

## 🔄 Automatic Deployments

Qualquer push para a branch `main` do GitHub vai automaticamente fazer deploy na Vercel.

```bash
git push origin main
# → Vercel detecta a mudança
# → Inicia o build
# → Deploy automático (2-3 min)
```

## 📊 Dashboard Vercel

Após fazer deploy, você pode:

1. Ver analytics em tempo real
2. Gerenciar domínios customizados
3. Configurar redirects e rewrites
4. Monitorar performance
5. Ver logs de deployment

Link do dashboard: `https://vercel.com/dashboard`

## 🎯 Rotas Disponíveis

| Rota | Descrição |
|------|-----------|
| `/` | Landing page com hero, services, fleet, contact |
| `/vetting` | Redirecionamento para login |
| `/vetting/login` | Página de login do motorista |
| `/vetting/register` | Pré-registro (a implementar) |
| `/vetting/dashboard` | Portal do motorista (a implementar) |

## 💡 Pro Tips

1. **Domínio customizado**: Você pode conectar seu próprio domínio no dashboard
2. **Preview URLs**: Todo PR do GitHub gera uma URL de preview automática
3. **Rollback**: Pode facilmente reverter para uma versão anterior
4. **Performance**: Vercel otimiza automaticamente imagens e CSS

## 🆘 Troubleshooting

### Deploy falha
- Verifique o log no dashboard Vercel
- Certifique-se de que as dependências estão corretas
- Veja se há erros de TypeScript

### Site lento
- Vercel otimiza automaticamente
- Verifique a aba "Analytics" no dashboard
- Pode ser um problema de imagens grandes

### Erro ao acessar /vetting
- É normal para páginas não implementadas
- Veter o arquivo `app/vetting/page.tsx`

## 📞 Support

Para dúvidas sobre Vercel:
- Docs: https://vercel.com/docs
- Status: https://www.vercelstatus.com/

---

**Seu repositório está pronto para deploy! 🚀**
