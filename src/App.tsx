
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/hooks/useCart";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { LoadingScreen } from "@/components/LoadingScreen";
import React, { Suspense, lazy } from "react";

// Lazy load all the page components
const CoreLayout = lazy(() => import("./layouts/CoreLayout"));
const Home = lazy(() => import("./pages/Home"));
const Web = lazy(() => import("./pages/Web"));
const Dev = lazy(() => import("./pages/Dev"));
const Social = lazy(() => import("./pages/Social"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Shop = lazy(() => import("./pages/Shop"));
const MylarDesigns = lazy(() => import("./pages/MylarDesigns"));
const CustomDesigns = lazy(() => import("./pages/CustomDesigns"));
const SocialMediaContent = lazy(() => import("./pages/SocialMediaContent"));
const DigitalAssets = lazy(() => import("./pages/DigitalAssets"));
const CustomMylarForm = lazy(() => import("./pages/CustomMylarForm"));
const CustomWebsiteForm = lazy(() => import("./pages/CustomWebsiteForm"));
const Referral = lazy(() => import("./pages/Referral"));
const Contact = lazy(() => import("./pages/Contact"));
const CustomDesignForm = lazy(() => import("./pages/CustomDesignForm"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Admin = lazy(() => import("./pages/Admin"));
const Brand = lazy(() => import("./pages/Brand"));
const Auth = lazy(() => import("./pages/Auth"));
const Tdlist = lazy(() => import("./pages/Tdlist"));
const TdDesigns = lazy(() => import("./pages/TdDesigns"));
const Quickprintz = lazy(() => import("./pages/Quickprintz"));
const QuickprintzForm = lazy(() => import("./pages/QuickprintzForm"));
const Show = lazy(() => import("./pages/Show"));
const TdReferral = lazy(() => import("./pages/TdReferral"));
const Builder = lazy(() => import("./pages/Builder"));
const AuthBuilder = lazy(() => import("./pages/AuthBuilder"));
const MassCardEditor = lazy(() => import("./components/MassCardEditor"));
const ComponentLibrary = lazy(() => import("./components/ComponentLibrary"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <CartProvider>
          <BrowserRouter>
            <Suspense fallback={<LoadingScreen />}>
              <Routes>
                {/* TD Studios Main Routes with CoreLayout */}
                <Route path="/" element={<CoreLayout />}>
                  <Route index element={<Home />} />
                  <Route path="web" element={<Web />} />
                  <Route path="dev" element={<Dev />} />
                  <Route path="social" element={<Social />} />
                  <Route path="portfolio" element={<Portfolio />} />
                  <Route path="shop" element={<Shop />} />
                  <Route path="mylar-designs" element={<MylarDesigns />} />
                  <Route path="custom-designs" element={<CustomDesigns />} />
                  <Route path="social-content" element={<SocialMediaContent />} />
                  <Route path="digital-assets" element={<DigitalAssets />} />
                  <Route path="custom-mylar-form" element={<CustomMylarForm />} />
                  <Route path="custom-websites" element={<CustomWebsiteForm />} />
                  <Route path="referral" element={<Referral />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="custom-design-form" element={<CustomDesignForm />} />
                  <Route path="checkout" element={<Checkout />} />
                </Route>

                {/* App Routes */}
                <Route path="/admin" element={<Admin />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/auth" element={<Auth />} />

                {/* Brand Routes */}
                <Route path="/tdstudios" element={<Tdlist />} />
                <Route path="/tddesigns" element={<TdDesigns />} />
                <Route path="/quickprintz" element={<Quickprintz />} />
                <Route path="/quickprintz/form" element={<QuickprintzForm />} />
                <Route path="/show" element={<Show />} />
                <Route path="/tdreferall" element={<TdReferral />} />

                {/* Dev-only builder routes */}
                <Route path="/__builder" element={<Builder />} />
                <Route path="/__auth-builder" element={<AuthBuilder />} />
                <Route path="/__card-editor" element={<MassCardEditor />} />
                <Route path="/__components" element={<ComponentLibrary />} />

                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </CartProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
