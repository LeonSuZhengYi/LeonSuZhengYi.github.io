---
title: "Singular Integrals and Elliptic Estimates: Reading Stein, Chapters I–IV"
date: 2026-10-24
description: "Three elliptic estimates through cancellation, spherical spectral theory, and Littlewood–Paley square functions, with definitions and proof calculations."
slug: singular-integrals-elliptic-estimates
---

# Singular Integrals and Elliptic Estimates: Reading Stein, Chapters I–IV

*Reading notes on E. M. Stein, Singular Integrals and Differentiability Properties of Functions, Chapters I–IV.*

What I want to remember from these chapters is **how bounds for singular integrals become estimates for derivatives**. Three estimates organize the reading. Initially, $f\in C_c^\infty$ and $1<p<\infty$:

\[
\boxed{
\begin{aligned}
\|\partial_x f\|_p+\|\partial_y f\|_p
 &\lesssim_p\|(\partial_x+i\partial_y)f\|_p,\\
\|\partial_i\partial_j f\|_p
 &\lesssim_{p,n}\|\Delta f\|_p.
\end{aligned}}
\tag{E1}
\]

\[
\boxed{
\|D^\alpha f\|_p\lesssim_{p,P_k}\|P_k(D)f\|_p,
\qquad |\alpha|=k.
}
\tag{E2}
\]

\[
\boxed{
\|f\|_{W^{k,p}}
 \lesssim_{p,P}\|P(D)f\|_p+\|f\|_p.
}
\tag{E3}
\]

In (E2), $P_k$ is homogeneous elliptic of degree $k$. In (E3), $P$ may have lower-order terms; only its principal part must be elliptic.

| Estimate | Multiplier to understand | Main tool |
|---|---|---|
| (E1) | Products of $\xi_j/|\xi|$ | Riesz transforms |
| (E2) | $\xi^\alpha/P_k(\xi)$ | Angular kernel–multiplier correspondence |
| (E3) | A cutoff times $(2\pi i\xi)^\alpha/p(\xi)$ | Mikhlin and a frequency split |

The common mechanism is an identity followed by an operator bound:

\[
D^\alpha f=T_m(P(D)f)
\quad\Longrightarrow\quad
\|D^\alpha f\|_p
 \le \|T_m\|_{p\to p}\,\|P(D)f\|_p.
\]

The Hilbert transform has its own [construction and applications note](hilbert-transform-construction-and-applications.html). Here I follow the route from that example to higher-dimensional elliptic estimates, ending with soft and hard dyadic Littlewood–Paley decompositions.

### Conventions and a small symbol guide

\[
\begin{gathered}
\widehat f(\xi)=\int_{\mathbb R^n}
 e^{-2\pi i x\cdot\xi}f(x)\,dx,
\qquad
\mathcal F^{-1}g(x)=\int_{\mathbb R^n}
 e^{2\pi i x\cdot\xi}g(\xi)\,d\xi,\\
D^\alpha=\partial^\alpha,\qquad
\widehat{D^\alpha f}=(2\pi i\xi)^\alpha\widehat f,
\qquad
T_m f=\mathcal F^{-1}(m\widehat f).
\end{gathered}
\]

Here $\alpha=(\alpha_1,\ldots,\alpha_n)$ is a multi-index and $|\alpha|=\sum_j\alpha_j$. I use

\[
\begin{gathered}
p'=\frac p{p-1},\qquad
\langle f,h\rangle=\int f\,\overline h,\qquad
\|f\|_{W^{k,p}}=\sum_{|\alpha|\le k}\|D^\alpha f\|_p,\\
A\lesssim B\ \Longleftrightarrow\ A\le CB,
\qquad
A\asymp B\ \Longleftrightarrow\ A\lesssim B\lesssim A.
\end{gathered}
\]

The constant may depend on displayed subscripts, dimension, or a fixed cutoff, but never on the function or a finite number of frequency pieces. Surface measure $d\sigma$ on $S^{n-1}$ is unnormalized.

## 0. Schwartz space: a safe domain for Fourier operations

Before using a singular kernel or a Hilbert-valued Fourier transform, I want a class on which the underlying scalar operations are genuinely justified. That class is $\mathcal S(\mathbb R^n)$.

### Decay, differentiation, and the Fréchet topology

Define

\[
\mathcal S=\left\{f\in C^\infty:
 q_{\alpha,\beta}(f):=\sup_x|x^\alpha D^\beta f(x)|<\infty
 \text{ for all }\alpha,\beta\right\}.
\]

An equivalent increasing family of seminorms is

\[
p_N(f)=\max_{|\beta|\le N}\sup_x(1+|x|)^N|D^\beta f(x)|,
\qquad N=0,1,\ldots.
\]

Thus $f_j\to f$ in $\mathcal S$ means $p_N(f_j-f)\to0$ for every $N$. In particular,

\[
D^\beta f,\quad x^\alpha f\in\mathcal S,
\qquad
\mathcal S\subset L^p\quad(1\le p\le\infty),
\]

and multiplication by polynomials and differentiation are continuous maps $\mathcal S\to\mathcal S$.

Rapid decay gives the domination needed to differentiate under the Fourier integral, while integration by parts has no boundary contribution:

\[
D_\xi^\beta\widehat f
 =\mathcal F[(-2\pi ix)^\beta f],
\qquad
(2\pi i\xi)^\alpha\widehat f
 =\mathcal F[D^\alpha f].
\]

Combining these identities,

\[
\sup_\xi
 |(2\pi i\xi)^\alpha D_\xi^\beta\widehat f(\xi)|
 \le\|D^\alpha[(-2\pi ix)^\beta f]\|_1<\infty.
\]

Each $L^1$ norm on the right is controlled by finitely many Schwartz seminorms. This proves the continuity of $\mathcal F:\mathcal S\to\mathcal S$. Fourier inversion supplies its continuous inverse:

\[
\boxed{
\mathcal F:\mathcal S\overset{\sim}{\longrightarrow}\mathcal S,
\qquad
f(x)=\int e^{2\pi ix\cdot\xi}\widehat f(\xi)\,d\xi.
}
\]

The inversion integral is absolutely convergent; differentiating it is legitimate to every order.

### Convolution, products, and Fubini

For $f,g\in\mathcal S$, both $fg$ and $f*g$ belong to $\mathcal S$. For convolution, the basic estimates follow from

\[
D^\beta(f*g)=f*D^\beta g,
\qquad
x^\alpha=\sum_{\gamma\le\alpha}
 {\alpha\choose\gamma}z^\gamma(x-z)^{\alpha-\gamma}
\]

inside the integral $\int f(z)g(x-z)\,dz$. Weighted derivatives reduce to finite sums of convolutions of rapidly decreasing functions.

The Fourier product rule is a classical Fubini calculation, justified by

\[
\iint|f(z)g(x-z)|\,dz\,dx=\|f\|_1\|g\|_1<\infty.
\]

Consequently,

\[
\boxed{
\widehat{f*g}=\widehat f\,\widehat g,
\qquad
\widehat{fg}=\widehat f*\widehat g,
\qquad
D^\alpha(f*g)=(D^\alpha f)*g=f*(D^\alpha g).
}
\]

For example, if $a,b\in\mathcal S$, then

\[
\mathcal F^{-1}(a\,b)=\check a*\check b
\]

is an identity between ordinary absolutely convergent integrals. This is the elementary calculation later used in localized multiplier formulas.

Parseval and Plancherel likewise begin on $\mathcal S$:

\[
\langle f,g\rangle
 =\langle\widehat f,\widehat g\rangle,
\qquad
\|\widehat f\|_2=\|f\|_2.
\]

Density then extends $\mathcal F$ uniquely to a unitary map on $L^2$. The $L^2$ transform agrees with the classical integral whenever $f\in L^1\cap L^2$.

### Smooth multipliers and the origin

If $a\in C^\infty$ and each derivative of $a$ grows at most polynomially, then

\[
f\longmapsto a\widehat f
\quad\text{and}\quad
f\longmapsto T_af=\mathcal F^{-1}(a\widehat f)
\]

are continuous maps on $\mathcal S$. This applies to differential symbols, smooth cutoffs, and smooth frequency-localized symbols.

A multiplier smooth only on $\mathbb R^n\setminus\{0\}$ need not preserve $\mathcal S$: behavior at the origin still matters. A convenient initial class is

\[
\mathcal S_*=
 \mathcal F^{-1}\bigl(C_c^\infty(\mathbb R^n\setminus\{0\})\bigr).
\]

For smooth $m$ away from zero and $f\in\mathcal S_*$, $m\widehat f\in C_c^\infty$, so $T_mf\in\mathcal S$. This class is dense in $L^p$, $1<p<\infty$; Section 9 records the cutoff argument. Finite-regularity symbols can instead be defined first on $L^2$ and treated by approximation.

### Tempered distributions extend the identities, not the estimates

The continuous dual $\mathcal S'$ is the space of tempered distributions. With the bilinear distributional pairing,

\[
\langle D^\alpha u,\phi\rangle
 =(-1)^{|\alpha|}\langle u,D^\alpha\phi\rangle,
\qquad
\langle\widehat u,\phi\rangle=\langle u,\widehat\phi\rangle.
\]

These definitions extend the classical operations compatibly:

\[
\mathcal F:\mathcal S'\overset{\sim}{\longrightarrow}\mathcal S',
\qquad
\widehat{D^\alpha u}=(2\pi i\xi)^\alpha\widehat u.
\]

Every $f\in L^p$, $1\le p\le\infty$, defines a tempered distribution because

\[
|\langle f,\phi\rangle|\le\|f\|_p\|\phi\|_{p'}.
\]

For $u\in\mathcal S'$ and $\phi\in\mathcal S$, the convolution $u*\phi$ is well-defined, and

\[
\widehat{u*\phi}=\widehat u\,\widehat\phi
\quad\text{in }\mathcal S'.
\]

Products or convolutions of two arbitrary tempered distributions are not automatically defined. We will use either these legitimate distributional operations or an explicitly justified classical/Bochner integral.

The working order is therefore

\[
\text{calculate on }\mathcal S\text{ or }\mathcal S_*
 \ \longrightarrow\
 \text{identify in }\mathcal S'
 \ \longrightarrow\
 \text{prove an }L^p\text{ bound and extend}.
\]

The last step is substantive: a distributional Fourier identity is not itself a multiplier theorem.

## 1. Cancellation and Calderón–Zygmund estimates

### Local averages and the good/bad decomposition

The maximal operator and its basic estimates are

\[
Mf(x)=\sup_{r>0}\frac1{|B(x,r)|}
 \int_{B(x,r)}|f(y)|\,dy,
\]

\[
|\{Mf>\lambda\}|
 \lesssim_n\frac{\|f\|_1}{\lambda},
\qquad
\|Mf\|_p\lesssim_{p,n}\|f\|_p
\quad(1<p\le\infty).
\]

For $f\in L^1$ and $\lambda>0$, select maximal dyadic cubes $Q$ with average greater than $\lambda$. Their parents have average at most $\lambda$, so

\[
\lambda<\frac1{|Q|}\int_Q|f|
 \le 2^n\lambda,
\qquad
\sum_Q|Q|\le\lambda^{-1}\|f\|_1.
\]

Write $E=\bigcup_Q Q$ and $f_Q=|Q|^{-1}\int_Q f$. Define

\[
g=f\mathbf1_{E^c}+\sum_Q f_Q\mathbf1_Q,
\qquad
b_Q=(f-f_Q)\mathbf1_Q,
\qquad f=g+\sum_Q b_Q.
\]

The information we actually use is

\[
\begin{aligned}
\|g\|_\infty&\le 2^n\lambda,
&\|g\|_1&\le\|f\|_1,
&\|g\|_2^2&\lesssim\lambda\|f\|_1,\\
\operatorname{supp}b_Q&\subset Q,
&\int_Qb_Q&=0,
&\sum_Q\|b_Q\|_1&\le2\|f\|_1.
\end{aligned}
\]

For more general bad open sets, Whitney cubes provide the geometry

\[
E=\bigcup_QQ,\qquad
\operatorname{diam}Q\asymp\operatorname{dist}(Q,E^c).
\]

In the singular-integral argument, the decisive combination is **local support plus zero integral**.

### Why a nonintegrable kernel can still act

Consider

\[
K(x)=|x|^{-n}\Omega(x/|x|),
\qquad
\Omega\in C^\infty(S^{n-1}),
\qquad
\int_{S^{n-1}}\Omega\,d\sigma=0.
\]

For nonzero $\Omega$,

\[
\int_{|x|<1}|K(x)|\,dx
 =\|\Omega\|_{L^1(S^{n-1})}\int_0^1\frac{dr}{r}
 =\infty.
\]

But for $\phi\in\mathcal S$, angular cancellation gives the meaningful expression

\[
\begin{aligned}
\langle \operatorname{p.v.}K,\phi\rangle
={}&\int_{|y|<1}K(y)[\phi(y)-\phi(0)]\,dy\\
&+\int_{|y|\ge1}K(y)\phi(y)\,dy.
\end{aligned}
\]

Indeed,

\[
|\phi(y)-\phi(0)|\lesssim_\phi |y|,
\qquad
\int_{|y|<1}|y|^{-n+1}\,dy<\infty.
\]

Kernel regularity supplies a second cancellation mechanism:

\[
|\nabla K(x)|\lesssim |x|^{-n-1}
\quad\Longrightarrow\quad
|K(x-h)-K(x)|
 \lesssim\frac{|h|}{|x|^{n+1}}
\quad(|x|>2|h|).
\]

After integration,

\[
\sup_{h\ne0}\int_{|x|>2|h|}
 |K(x-h)-K(x)|\,dx
 \lesssim \sup_{h\ne0}|h|\int_{2|h|}^\infty r^{-2}\,dr
 <\infty.
\]

### The weak $(1,1)$ proof in estimates

Assume the associated convolution operator $T$ is already bounded on $L^2$. Let $Q^*$ be a sufficiently large fixed dilation of $Q$, and let $c_Q$ be its center. Outside $Q^*$,

\[
\begin{aligned}
Tb_Q(x)
 &=\int_QK(x-y)b_Q(y)\,dy\\
 &=\int_Q[K(x-y)-K(x-c_Q)]b_Q(y)\,dy.
\end{aligned}
\]

Only now do we take absolute values:

\[
\int_{(Q^*)^c}|Tb_Q(x)|\,dx
 \lesssim\int_Q|b_Q(y)|\,dy.
\]

Put $E^*=\bigcup_QQ^*$. The good and bad estimates become

\[
\begin{aligned}
|\{|Tg|>\lambda/2\}|
 &\lesssim\lambda^{-2}\|Tg\|_2^2
 \lesssim\lambda^{-1}\|f\|_1,\\
|E^*|&\lesssim\lambda^{-1}\|f\|_1,\\
\int_{(E^*)^c}|Tb|
 &\le\sum_Q\int_{(Q^*)^c}|Tb_Q|
 \lesssim\|f\|_1.
\end{aligned}
\]

Consequently,

\[
|\{|Tf|>\lambda\}|
 \lesssim\lambda^{-1}\|f\|_1.
\]

Interpolation with $L^2$, followed by the same argument for $T^*$, yields

\[
\boxed{\|Tf\|_p\lesssim_p\|f\|_p,
\qquad 1<p<\infty.}
\]

This proof explains exactly where each hypothesis enters: $L^2$ controls $g$; the size of the bad set controls $E^*$; cancellation and kernel regularity control $b$ off $E^*$.

### From a bounded operator to principal values

Pointwise principal values require another step. Define

\[
T_\varepsilon f(x)=\int_{|y|>\varepsilon}K(y)f(x-y)\,dy,
\qquad
T_*f=\sup_{\varepsilon>0}|T_\varepsilon f|.
\]

For smooth homogeneous Calderón–Zygmund kernels, a Cotlar inequality gives, for $0<\delta<1$,

\[
T_*f\lesssim_\delta
 \bigl[M(|Tf|^\delta)\bigr]^{1/\delta}+Mf.
\]

Hence $\|T_*f\|_p\lesssim_p\|f\|_p$. Approximation by smooth functions then identifies the bounded extension with the almost-everywhere limit of $T_\varepsilon f$. A Fourier identity in $\mathcal S'$ alone does not give this conclusion.

## 2. First estimate: Riesz transforms from symmetry

### Determine the multiplier before computing it

Let $T=(T_1,\ldots,T_n)$ be a tuple of bounded $L^2$ operators. Translation invariance first gives

\[
T_j\tau_h=\tau_hT_j
\quad\Longrightarrow\quad
\widehat{T_jf}=m_j\widehat f,
\qquad
\tau_hf(x)=f(x-h).
\]

For scalar multipliers,

\[
T=\mathcal F^{-1}M_m\mathcal F,
\qquad
\|T\|_{2\to2}=\|m\|_\infty.
\]

Dilation invariance and orthogonal covariance imply, for the vector multiplier $m=(m_1,\ldots,m_n)$,

\[
m(t\xi)=m(\xi)\quad(t>0),
\qquad
m(U\xi)=Um(\xi)\quad(U\in O(n)).
\]

These are initially almost-everywhere identities; one may choose the corresponding equivariant spherical representative. For $\xi\ne0$, let

\[
G_\xi=\{U\in O(n):U\xi=\xi\}.
\]

Then

\[
m(\xi)\in\{v:Uv=v\text{ for every }U\in G_\xi\}
 =\mathbb C\xi.
\]

Homogeneity and transitivity on the sphere now force

\[
\boxed{m(\xi)=c\,\frac{\xi}{|\xi|}.}
\]

The full group matters: in dimension two, $SO(2)$ alone would also allow $J\xi/|\xi|$, where $J$ rotates by $\pi/2$. Reflections eliminate that tangential possibility.

### Normalize, then use the operator algebra

With

\[
c_n=\frac{\Gamma((n+1)/2)}{\pi^{(n+1)/2}},
\]

the Riesz transforms are

\[
R_jf(x)=c_n\,\operatorname{p.v.}
 \int_{\mathbb R^n}\frac{y_j}{|y|^{n+1}}f(x-y)\,dy,
\qquad
\widehat{R_jf}=-i\frac{\xi_j}{|\xi|}\widehat f.
\]

The normalization is compatible with the Poisson identity

\[
R_j\partial_tP_t=\partial_jP_t:
\qquad
\left(-i\frac{\xi_j}{|\xi|}\right)
 \left(-2\pi|\xi|e^{-2\pi t|\xi|}\right)
 =2\pi i\xi_j e^{-2\pi t|\xi|}.
\]

With our negative-exponent Fourier convention, the sign on the right is positive. The useful operator identities are

\[
R_j^*=-R_j,\qquad
R_iR_j=R_jR_i,\qquad
\sum_{j=1}^nR_j^2=-I,
\qquad
\|R_jf\|_p\lesssim_p\|f\|_p.
\]

### Laplacian: one line of symbol algebra

\[
\begin{aligned}
\widehat{-R_iR_j\Delta f}
 &=-\left(-\frac{\xi_i\xi_j}{|\xi|^2}\right)
        (-4\pi^2|\xi|^2)\widehat f\\
 &=-4\pi^2\xi_i\xi_j\widehat f
 =\widehat{\partial_i\partial_jf}.
\end{aligned}
\]

Therefore

\[
\partial_i\partial_jf=-R_iR_j\Delta f
\quad\Longrightarrow\quad
\boxed{\|\partial_i\partial_jf\|_p\lesssim_p\|\Delta f\|_p.}
\]

### Cauchy–Riemann: a complex derivative controls both directions

In $\mathbb R^2$, set

\[
\bar D=\partial_x+i\partial_y=2\partial_{\bar z},
\qquad
\widehat{\bar Df}=2\pi i(\xi_1+i\xi_2)\widehat f.
\]

The reciprocal symbol is harmless away from zero because

\[
(\xi_1-i\xi_2)(\xi_1+i\xi_2)=|\xi|^2.
\]

More explicitly,

\[
\begin{aligned}
\partial_jf&=-R_j(R_1-iR_2)\bar Df,\\
-\left(-i\frac{\xi_j}{|\xi|}\right)
 \left(-i\frac{\xi_1-i\xi_2}{|\xi|}\right)
 \bigl[2\pi i(\xi_1+i\xi_2)\bigr]
 &=2\pi i\xi_j.
\end{aligned}
\]

Taking norms proves the first part of (E1):

\[
\boxed{
\|\partial_xf\|_p+\|\partial_yf\|_p
 \lesssim_p\|\bar Df\|_p.
}
\]

Here $f$ may be complex-valued. For real-valued $f$, the same control is already pointwise:

\[
|\bar Df|^2=|\partial_xf|^2+|\partial_yf|^2.
\]

The nontrivial claim is the estimate for complex-valued functions, where pointwise cancellation inside $\bar Df$ is possible.

## 3. Second estimate: the angular spectral problem

### Ellipticity produces a smooth degree-zero quotient

Let

\[
P_k(\xi)=\sum_{|\beta|=k}a_\beta\xi^\beta,
\qquad
P_k(\xi)\ne0\quad(\xi\ne0).
\]

Compactness of the sphere gives

\[
|P_k(\xi)|\ge c|\xi|^k.
\]

For $|\alpha|=k$,

\[
m_\alpha(\xi)=\frac{\xi^\alpha}{P_k(\xi)},
\qquad
m_\alpha(t\xi)=m_\alpha(\xi),
\qquad
m_\alpha|_{S^{n-1}}\in C^\infty.
\]

Since $\widehat{P_k(D)f}=(2\pi i)^kP_k(\xi)\widehat f$,

\[
D^\alpha f=T_{m_\alpha}(P_k(D)f).
\]

The missing theorem is thus: **every smooth degree-zero homogeneous multiplier is $L^p$ bounded**. Chapter III proves it by constructing a singular kernel. For the spherical argument below, $n\ge2$; in dimension one the corresponding multipliers are linear combinations of $I$ and $H$.

### The angular map and its logarithmic kernel

For $K(x)=|x|^{-n}\Omega(x/|x|)$ with $\int\Omega=0$, its multiplier is $A\Omega$ on the sphere:

\[
(A\Omega)(\theta)
 =\int_{S^{n-1}}\Gamma(\theta\cdot\omega)
       \Omega(\omega)\,d\sigma(\omega),
\]

\[
\Gamma(s)=\log\frac1{|s|}
 -\frac{i\pi}{2}\operatorname{sgn}s.
\]

The radial calculation behind this formula is

\[
\int_0^\infty
 \frac{e^{-(\delta+2\pi ia)r}-e^{-r}}r\,dr
 =-\log(\delta+2\pi ia),
\qquad \delta>0.
\]

As $\delta\downarrow0$, for $a\ne0$,

\[
-\log(\delta+2\pi ia)
 \longrightarrow
 -\log(2\pi)-\log|a|
 -\frac{i\pi}{2}\operatorname{sgn}a.
\]

Set $a=\xi\cdot\omega=|\xi|\,\theta\cdot\omega$. The terms independent of $\omega$ vanish:

\[
\bigl[-\log(2\pi)-\log|\xi|\bigr]\int\Omega\,d\sigma=0.
\]

What remains is precisely $A\Omega(\theta)$. Cancellation removes both the divergent radial constant and the unwanted dependence on $|\xi|$.

### Compactness and normality on $L^2(S^{n-1})$

For fixed $\theta$, spherical slicing gives

\[
\int_{S^{n-1}}|\Gamma(\theta\cdot\omega)|^2\,d\sigma(\omega)
 =|S^{n-2}|\int_{-1}^1
 |\Gamma(s)|^2(1-s^2)^{(n-3)/2}\,ds<\infty.
\]

Near $s=0$, only $\log^2|s|$ is singular; near $\pm1$, the weight is integrable, including when $n=2$. Thus

\[
\iint|\Gamma(\theta\cdot\omega)|^2\,d\sigma(\theta)d\sigma(\omega)<\infty,
\]

\[
A\text{ is Hilbert–Schmidt}
\quad\Longrightarrow\quad A\text{ is compact}.
\]

To see normality, write

\[
A=B-iC,
\]

where $B$ has kernel $\log(1/|\theta\cdot\omega|)$ and $C$ has kernel $(\pi/2)\operatorname{sgn}(\theta\cdot\omega)$. Both kernels are real and symmetric, hence

\[
B^*=B,\qquad C^*=C.
\]

Parity gives more:

\[
\begin{array}{c|cc}
 &\text{even input}&\text{odd input}\\ \hline
 B&\text{even output}&0\\
 C&0&\text{odd output}
\end{array}
\qquad\Longrightarrow\qquad BC=CB=0.
\]

Therefore

\[
AA^*=(B-iC)(B+iC)=B^2+C^2=A^*A.
\]

So $A$ is a **compact normal operator**. The next question is what its eigenvalues do.

### Spherical harmonics diagonalize the map

Let $\mathcal H_\ell$ be the restrictions of homogeneous harmonic polynomials of degree $\ell$. Then

\[
L^2(S^{n-1})
 =\widehat{\bigoplus}_{\ell\ge0}\mathcal H_\ell,
\qquad
-\Delta_SY=\lambda_\ell Y,
\qquad
\lambda_\ell=\ell(\ell+n-2).
\]

Write $\Pi_\ell$ for the orthogonal projection onto $\mathcal H_\ell$. The Funk–Hecke formula diagonalizes the zonal kernel; Stein's higher-Riesz-transform calculation identifies, for $\ell\ge1$,

\[
A\Pi_\ell=\gamma_\ell\Pi_\ell,
\qquad
\gamma_\ell=(-i)^\ell\pi^{n/2}
 \frac{\Gamma(\ell/2)}{\Gamma((n+\ell)/2)}.
\]

Gamma-ratio asymptotics give the two facts needed for inversion:

\[
\gamma_\ell\ne0,
\qquad
|\gamma_\ell|\asymp\ell^{-n/2}.
\]

For a mean-zero function $m=\sum_{\ell\ge1}m_\ell$, the candidate inverse is

\[
\Omega=A^{-1}m
 =\sum_{\ell\ge1}\gamma_\ell^{-1}m_\ell.
\]

This is not a bounded inverse on $L^2_0$: if $\|Y_\ell\|_2=1$ and $Y_\ell\in\mathcal H_\ell$,

\[
\|AY_\ell\|_2=|\gamma_\ell|\longrightarrow0,
\qquad
\|A^{-1}Y_\ell\|_2=|\gamma_\ell|^{-1}\longrightarrow\infty.
\]

### Why inversion is continuous on smooth functions

Define the mean-zero spherical Sobolev norm by

\[
\|v\|_{H^s}^2
 =\sum_{\ell\ge1}(1+\lambda_\ell)^s\|\Pi_\ell v\|_2^2.
\]

Since $\lambda_\ell\asymp\ell^2$,

\[
\begin{aligned}
\|A\Omega\|_{H^{s+n/2}}^2
 &=\sum_{\ell\ge1}
 (1+\lambda_\ell)^{s+n/2}
 |\gamma_\ell|^2\|\Omega_\ell\|_2^2\\
 &\asymp\sum_{\ell\ge1}
 (1+\lambda_\ell)^s\|\Omega_\ell\|_2^2
 =\|\Omega\|_{H^s}^2.
\end{aligned}
\]

Thus, for every real $s$,

\[
\boxed{A:H^s_0\overset{\sim}{\longrightarrow}H^{s+n/2}_0.}
\]

In particular,

\[
\operatorname{Ran}(A|_{L^2_0})=H^{n/2}_0
 \subsetneq L^2_0,
\qquad
C^\infty_0(S^{n-1})=\bigcap_sH^s_0,
\]

\[
\|A^{-1}m\|_{H^s}\asymp\|m\|_{H^{s+n/2}}
\quad\Longrightarrow\quad
A:C^\infty_0\overset{\sim}{\longrightarrow}C^\infty_0.
\]

Here the subscript $0$ means zero mean, not compact support. Compactness on $L^2$ and continuous invertibility on $C^\infty$ are perfectly compatible: the inverse loses a fixed number of angular derivatives.

There remains an integral-versus-series identification. Set

\[
\Omega_N=\sum_{\ell=1}^N\gamma_\ell^{-1}m_\ell.
\]

The finite sums satisfy $A\Omega_N=\sum_{\ell=1}^Nm_\ell$, and

\[
\sup_\theta|A(\Omega-\Omega_N)(\theta)|
 \le C_\Gamma\|\Omega-\Omega_N\|_2\longrightarrow0.
\]

Smooth harmonic expansions also converge uniformly, so the integral $A\Omega$ really equals $m$.

### Return to the PDE

For a general smooth degree-zero multiplier, separate its mean:

\[
c=\frac1{|S^{n-1}|}\int_{S^{n-1}}m\,d\sigma,
\qquad
\Omega=A^{-1}(m-c).
\]

Then

\[
T_m=cI+T_\Omega,
\qquad
T_\Omega f
 =\operatorname{p.v.}\int
 \frac{\Omega(y/|y|)}{|y|^n}f(\,\cdot-y)\,dy.
\]

Calderón–Zygmund theory now gives

\[
\|T_mf\|_p
 \le |c|\|f\|_p+\|T_\Omega f\|_p
 \lesssim_{p,m}\|f\|_p.
\]

Apply this to $m_\alpha=\xi^\alpha/P_k(\xi)$:

\[
\boxed{
\|D^\alpha f\|_p
 =\|T_{m_\alpha}(P_k(D)f)\|_p
 \lesssim\|P_k(D)f\|_p,\quad|\alpha|=k.
}
\]

This is (E2). Its hidden intermediate problem was the spectral inversion of $A$ on the sphere.

## 4. Hilbert-valued singular integrals

Continuous square functions collect an entire scale variable into one output. The right linear framework is

\[
T:L^p(\mathbb R^n;H_1)\longrightarrow
 L^p(\mathbb R^n;H_2),
\qquad
K(x)\in\mathcal B(H_1,H_2),
\]

where $H_1,H_2$ are separable Hilbert spaces and

\[
\|F\|_{L^p(H)}
 =\left(\int_{\mathbb R^n}\|F(x)\|_H^p\,dx\right)^{1/p}.
\]

### Bochner integration: the abstract integral and its scalar tests

Let $E$ be a Banach space. A strongly measurable $F:Z\to E$ is Bochner integrable precisely when

\[
\int_Z\|F(z)\|_E\,d\mu(z)<\infty.
\]

One defines the integral by approximating $F$ with simple $E$-valued functions in $L^1(Z;E)$:

\[
\int s_j\,d\mu\longrightarrow\int F\,d\mu
\quad\text{in }E,
\qquad
\left\|\int F\,d\mu\right\|_E\le\int\|F\|_E\,d\mu.
\]

For any bounded linear $L:E\to E'$,

\[
L\left(\int F\,d\mu\right)=\int LF\,d\mu.
\]

In particular, each $\ell\in E^*$ recovers an ordinary scalar integral:

\[
\ell\left(\int F\,d\mu\right)=\int\ell(F(z))\,d\mu(z).
\]

For $E=\mathbb C^q$, this is exactly coordinatewise classical integration. For a separable Hilbert space, strong measurability can be checked through scalar inner products.

### Bochner–Fubini and abstract convolution

For sigma-finite measure spaces $X,Z$ and a jointly strongly measurable $\Phi:X\times Z\to E$, the sufficient Fubini hypothesis is

\[
\int_X\int_Z\|\Phi(x,z)\|_E\,d\mu(z)\,d\nu(x)<\infty.
\]

The sections are then Bochner integrable almost everywhere, and

\[
\int_X\left(\int_Z\Phi(x,z)\,d\mu(z)\right)d\nu(x)
 =
\int_Z\left(\int_X\Phi(x,z)\,d\nu(x)\right)d\mu(z).
\]

Scalar Tonelli applies to $\|\Phi\|_E$ to check this hypothesis. We will use Bochner–Fubini when interchanging a spatial integral, a scale integral, and a Fourier transform; the integrability condition must be established first.

For an operator kernel $K:\mathbb R^n\to\mathcal B(H_1,H_2)$, abstract convolution means

\[
(K*_B f)(x):=\int_{\mathbb R^n}^{B}K(z)f(x-z)\,dz\in H_2.
\]

The superscript $B$ records a Bochner integral. Its basic sufficient condition at a fixed $x$ is strong measurability together with

\[
\int_{\mathbb R^n}
 \|K(z)\|_{\mathrm{op}}\|f(x-z)\|_{H_1}\,dz<\infty.
\]

In particular, under the usual measurability hypotheses, Young's inequality becomes

\[
\|K*_B f\|_{L^p(H_2)}
 \le\|\|K(\cdot)\|_{\mathrm{op}}\|_{L^1}
       \|f\|_{L^p(H_1)},\qquad1\le p\le\infty.
\]

For scalar $f$ and an $H$-valued $k\in L^1(\mathbb R^n;H)$, Bochner–Fubini also gives the familiar Fourier formula, initially with $f\in\mathcal S$:

\[
\widehat{k*_B f}(\xi)=\widehat k(\xi)\widehat f(\xi).
\]

For singular or merely weakly specified operator kernels, we first truncate/regularize or scalarize; we do not presume an operator-norm Fourier integral exists.

### Compatibility with a parameterwise classical convolution

Suppose the Hilbert target is itself a function space over a sigma-finite $(Y,\nu)$,

\[
H=L^2(Y,\nu;\mathbb C^q),
\]

and $k(z)\in H$ is represented by a jointly measurable function $k(z,y)$. If, for a fixed $x$,

\[
\int_{\mathbb R^n}
 |f(x-z)|\,\|k(z,\cdot)\|_H\,dz<\infty,
\]

then abstract convolution and the classical convolution at fixed $y$ agree:

\[
\boxed{
\int_{\mathbb R^n}^{B} k(z,\cdot)f(x-z)\,dz
 =
\left[y\longmapsto
 \int_{\mathbb R^n} k(z,y)f(x-z)\,dz\right]
 \quad\text{in }L^2(Y,\nu).
}
\]

Brackets mean an equivalence class. The inner classical integral exists for $\nu$-almost every $y$ under these hypotheses. This is a compatibility statement obtained from the integration theory, not from bounded point evaluation: evaluation at one $y$ is not a continuous functional on $L^2(Y)$.

This matters directly for continuous LP. Put

\[
H=L^2((0,\infty),t\,dt;\mathbb C^{n+1}),
\qquad
K_\varepsilon(z)=
 [t\longmapsto\nabla P_{t+\varepsilon}(z)],
\quad\varepsilon>0.
\]

Here $\nabla$ includes the spatial derivatives and the derivative of the Poisson height. For $f\in\mathcal S$,

\[
\|K_\varepsilon(z)\|_H
 \lesssim(\varepsilon^2+|z|^2)^{-n/2}
\]

makes the required spatial norm integral finite for every fixed $x$. Thus

\[
\begin{aligned}
\mathcal G_\varepsilon f(x)
 &:=\int_{\mathbb R^n}^{B}K_\varepsilon(z)f(x-z)\,dz\\
 &=\left[t\longmapsto
       \int_{\mathbb R^n}\nabla P_{t+\varepsilon}(z)f(x-z)\,dz\right]\\
 &=\left[t\longmapsto\nabla(P_{t+\varepsilon}*f)(x)\right]
 \quad\text{in }H.
\end{aligned}
\]

For each fixed $t>0$, the last convolution is an ordinary classical integral, with differentiation justified under the integral. Viewed as a function of $t$, it represents exactly the Hilbert-valued Bochner convolution. Consequently,

\[
\|\mathcal G_\varepsilon f(x)\|_H^2
 =\int_0^\infty t|\nabla(P_{t+\varepsilon}*f)(x)|^2\,dt.
\]

The unregularized kernel need not be absolutely Bochner integrable against $f(x-z)$ near $z=0$. We establish uniform operator bounds for $\varepsilon>0$ and then pass to the limit. This keeps the abstract convolution, the parameterwise convolution, and the square function consistent.

### Scalarization constructs the $L^2$ multiplier

For $u\in H_1$, $v\in H_2$, set

\[
k_{u,v}(x)=\langle K(x)u,v\rangle.
\]

Suppose their scalar Fourier transforms are compatible and satisfy

\[
|\widehat{k_{u,v}}(\xi)|
 \le B\|u\|_{H_1}\|v\|_{H_2}.
\]

Separability lets us first take a common null set for countable dense choices of $u,v$. Riesz representation then constructs

\[
\langle M(\xi)u,v\rangle=\widehat{k_{u,v}}(\xi),
\qquad
\|M(\xi)\|_{\mathrm{op}}\le B.
\]

No operator-norm Fourier integral for $K$ has been presumed. After identifying the convolution and multiplier by truncation, Hilbert-valued Plancherel gives

\[
\begin{aligned}
\|Tf\|_{L^2(H_2)}^2
 &=\int\|M(\xi)\widehat f(\xi)\|_{H_2}^2\,d\xi\\
 &\le B^2\int\|\widehat f(\xi)\|_{H_1}^2\,d\xi
 =B^2\|f\|_{L^2(H_1)}^2.
\end{aligned}
\]

The Hilbert-valued Plancherel identity itself follows from an orthonormal basis $(e_j)$:

\[
\int\|\widehat f\|_H^2
 =\sum_j\int|\widehat{\langle f,e_j\rangle}|^2
 =\sum_j\int|\langle f,e_j\rangle|^2
 =\int\|f\|_H^2.
\]

### Fréchet differentiation: what space does the derivative live in?

For

\[
K:\mathbb R^n\setminus\{0\}\longrightarrow\mathcal B(H_1,H_2),
\]

the Fréchet derivative at $x$ is a bounded real-linear map

\[
DK(x)\in\mathcal B\bigl(\mathbb R^n,\mathcal B(H_1,H_2)\bigr).
\]

It is characterized by an operator-norm remainder:

\[
\lim_{h\to0}
 \frac{\|K(x+h)-K(x)-DK(x)[h]\|_{\mathrm{op}}}{|h|}=0.
\]

There are three levels of objects:

\[
h\in\mathbb R^n,\qquad
DK(x)[h]\in\mathcal B(H_1,H_2),\qquad
(DK(x)[h])u\in H_2.
\]

With $|h|$ the Euclidean norm, the derivative norm is the nested supremum

\[
\begin{aligned}
\|DK(x)\|
 &=\sup_{|h|\le1}\|DK(x)[h]\|_{\mathrm{op}}\\
 &=\sup_{|h|\le1}\sup_{\|u\|_{H_1}\le1}
       \|(DK(x)[h])u\|_{H_2}\\
 &=\sup_{|h|\le1}\sup_{\|u\|_{H_1}\le1}
       \sup_{\|v\|_{H_2}\le1}
       |\langle(DK(x)[h])u,v\rangle|.
\end{aligned}
\]

In particular,

\[
\|(DK(x)[h])u\|_{H_2}
 \le\|DK(x)\|\,|h|\,\|u\|_{H_1}.
\]

If $\partial_jK=DK[e_j]$, then

\[
DK(x)[h]=\sum_{j=1}^nh_j\partial_jK(x),
\]

\[
\max_j\|\partial_jK(x)\|_{\mathrm{op}}
 \le\|DK(x)\|
 \le\left(\sum_j\|\partial_jK(x)\|_{\mathrm{op}}^2\right)^{1/2}.
\]

Thus operator-norm estimates for the partial derivatives give the abstract derivative estimate, with only a dimensional constant.

### From the derivative bound to the Hörmander condition

Assume $K$ is $C^1$ in operator norm and

\[
\|DK(x)\|\le C|x|^{-n-1},\qquad x\ne0.
\]

The fundamental theorem of calculus along a segment is a Bochner integral in $\mathcal B(H_1,H_2)$:

\[
K(x-h)-K(x)
 =-\int_0^1DK(x-sh)[h]\,ds.
\]

If $|x|>2|h|$, then $|x-sh|\ge|x|/2$ for $0\le s\le1$. Therefore

\[
\begin{aligned}
\|K(x-h)-K(x)\|_{\mathrm{op}}
 &\le|h|\int_0^1\|DK(x-sh)\|\,ds\\
 &\le C\,2^{n+1}|h|\,|x|^{-n-1}.
\end{aligned}
\]

Integrating in polar coordinates now removes the dependence on $h$:

\[
\begin{aligned}
\int_{|x|>2|h|}\|K(x-h)-K(x)\|_{\mathrm{op}}\,dx
 &\le C\,2^{n+1}|S^{n-1}|\,|h|
       \int_{2|h|}^{\infty}r^{-2}\,dr\\
 &=C\,2^n|S^{n-1}|.
\end{aligned}
\]

This is precisely the operator-valued Hörmander condition:

\[
\boxed{
\mathfrak H(K):=
 \sup_{h\ne0}\int_{|x|>2|h|}
 \|K(x-h)-K(x)\|_{\mathrm{op}}\,dx<\infty.
}
\]

The integrand itself contains the input/output suprema:

\[
\|K(x-h)-K(x)\|_{\mathrm{op}}
 =
 \sup_{\|u\|\le1}\sup_{\|v\|\le1}
 |\langle[K(x-h)-K(x)]u,v\rangle|.
\]

We control this norm before integrating; no interchange of a supremum and an integral is being assumed.

### Cancellation still precedes every norm

For a Hilbert-valued bad piece, $\int_Qb_Q=0$ in $H_1$. Bounded linear maps commute with Bochner integration, so

\[
K(x-c_Q)\int_Qb_Q(y)\,dy=0.
\]

Hence

\[
Tb_Q(x)
 =\int_Q[K(x-y)-K(x-c_Q)]b_Q(y)\,dy
\]

in $H_2$. Taking norms and then using scalar Tonelli gives

\[
\begin{aligned}
\int_{(Q^*)^c}\|Tb_Q(x)\|_{H_2}\,dx
 &\le\int_Q\|b_Q(y)\|_{H_1}
 \left[\int_{(Q^*)^c}
 \|K(x-y)-K(x-c_Q)\|_{\mathrm{op}}\,dx\right]dy\\
 &\le\mathfrak H(K)\|b_Q\|_{L^1(H_1)}.
\end{aligned}
\]

Here $Q^*$ is enlarged so that $|x-c_Q|>2|y-c_Q|$. This is the exact place where the abstract derivative estimate enters the Calderón–Zygmund proof:

\[
\|DK(x)\|\lesssim|x|^{-n-1}
 \ \Longrightarrow\ \mathfrak H(K)<\infty
 \ \Longrightarrow\ \text{control of the bad pieces}.
\]

Together with the Hilbert-valued $L^2$ estimate and the adjoint argument,

\[
\boxed{
\|Tf\|_{L^p(H_2)}\lesssim_p\|f\|_{L^p(H_1)},
\qquad1<p<\infty.
}
\]

## 5. Poisson extensions and boundary traces

### The semigroup and its boundary recovery

With the same $c_n$ as above,

\[
P_t(x)=c_n\frac{t}{(t^2+|x|^2)^{(n+1)/2}},
\qquad
\widehat{P_t}(\xi)=e^{-2\pi t|\xi|}.
\]

Thus

\[
\begin{gathered}
P_t\ge0,\qquad \int P_t=1,\qquad P_t*P_s=P_{t+s},\\
u(x,t)=P_t*f(x),\qquad
(\Delta_x+\partial_t^2)u=0,\qquad
\|u(\cdot,t)\|_p\le\|f\|_p.
\end{gathered}
\]

For $1\le p<\infty$, translation continuity proves strong recovery:

\[
\begin{aligned}
\|P_t*f-f\|_p
 &\le\int P_1(z)\|f(\,\cdot-tz)-f\|_p\,dz\\
 &\longrightarrow0.
\end{aligned}
\]

The domination by $2P_1(z)\|f\|_p$ justifies this limit. Pointwise recovery uses a different estimate:

\[
\sup_{t>0}|P_t*f(x)|\lesssim Mf(x).
\]

### A radial kernel is a mixture of ball averages

Here is the averaging structure behind that maximal bound. Suppose $\Phi(x)=h(|x|)\ge0$ is integrable, with $h$ smooth and decreasing. Set

\[
v_n=|B(0,1)|,\qquad
d\nu(r)=v_nr^n[-h'(r)]\,dr.
\]

Layer cake and integration by parts give

\[
h(s)=\int_s^\infty[-h'(r)]\,dr,
\qquad
\nu((0,\infty))=\|\Phi\|_1.
\]

For $\Phi_\varepsilon(x)=\varepsilon^{-n}\Phi(x/\varepsilon)$,

\[
\begin{aligned}
(\Phi_\varepsilon*|f|)(x)
 &=\int_0^\infty
 \left[\frac1{|B(x,\varepsilon r)|}
       \int_{B(x,\varepsilon r)}|f(y)|\,dy\right]d\nu(r)\\
 &\le\|\Phi\|_1Mf(x).
\end{aligned}
\]

For general decreasing $h$, replace $-h'(r)\,dr$ by its Stieltjes measure. For a positive measure $\mu$, replace the inner integral by $\mu(B(x,\varepsilon r))$. Thus the same representation gives

\[
\Phi_\varepsilon*\mu(x)
 \le\|\Phi\|_1
 \sup_{r>0}\frac{\mu(B(x,r))}{|B(x,r)|}.
\]

Poisson averages are a particular case of this general mixture. Differentiation of functions and measures then gives their almost-everywhere boundary values.

### The boundary space changes at the endpoints

Define the harmonic slice space

\[
h^p=\left\{u:\Delta_{x,t}u=0,\quad
 \|u\|_{h^p}:=\sup_{t>0}\|u(\cdot,t)\|_p<\infty\right\}.
\]

These are harmonic functions with bounded slice norms; this notation is not a definition of the real Hardy space $H^1$.

| Range | Unique boundary datum | Representation | Recovery |
|---|---|---|---|
| $p=1$ | $\mu\in\mathcal M=C_0^*$ | $u(\cdot,t)=P_t*\mu$ | $u(\cdot,t)\,dx\rightharpoonup^*\mu$ in $\mathcal M$ |
| $1<p<\infty$ | $f\in L^p$ | $u(\cdot,t)=P_t*f$ | $\|u(\cdot,t)-f\|_p\to0$ |
| $p=\infty$ | $f\in L^\infty$ | $u(\cdot,t)=P_t*f$ | $\int u(\cdot,t)h\to\int fh$, $h\in L^1$ |

The first endpoint is visible in one example:

\[
u(x,t)=P_t(x),\qquad
\|u(\cdot,t)\|_1=1,\qquad
u(\cdot,t)\,dx\rightharpoonup^*\delta_0,
\]

\[
u(x,t)\longrightarrow0\quad(x\ne0).
\]

Almost-everywhere convergence to zero does not describe the measure trace.

### Compactness proof: first shift, then extract a trace

Let $M=\|u\|_{h^p}$. For fixed $a>0$, interior harmonic estimates give

\[
\sup_{x,t\ge0}|u(x,t+a)|
 \lesssim a^{-n/p}M
\]

with $n/p=0$ when $p=\infty$. Uniqueness of bounded harmonic extension therefore yields the shifted semigroup identity

\[
u(\cdot,t+a)=P_t*u(\cdot,a).
\]

Choose $a_j\downarrow0$ and extract a subsequence:

\[
\begin{cases}
u(\cdot,a_j)\rightharpoonup f
   &\text{in }L^p,\quad1<p<\infty,\\
u(\cdot,a_j)\,dx\rightharpoonup^*\mu
   &\text{in }C_0^*,\quad p=1,\\
u(\cdot,a_j)\rightharpoonup^* f
   &\text{in }(L^1)^*,\quad p=\infty.
\end{cases}
\]

For $a_j<t$, write

\[
u(x,t)=\int P_{t-a_j}(x-y)u(y,a_j)\,dy.
\]

The test kernels converge in exactly the corresponding predual:

\[
P_{t-a_j}(x-\cdot)\longrightarrow P_t(x-\cdot)
\quad\text{in}\quad
\begin{cases}
L^{p'},&1<p<\infty,\\
C_0,&p=1,\\
L^1,&p=\infty.
\end{cases}
\]

Passing to the limit identifies $u=P_t*f$ or $P_t*\mu$. Boundary recovery makes this datum unique. Contraction and lower semicontinuity then give the isometries

\[
\boxed{
\|u\|_{h^p}=\|f\|_p\quad(1<p\le\infty),
\qquad
\|u\|_{h^1}=\|\mu\|_{\mathrm{TV}}.
}
\]

At $p=1$, strong recovery holds if $d\mu=f\,dx$ with $f\in L^1$. More generally,

\[
d\mu=f\,dx+d\mu_s
\quad\Longrightarrow\quad
P_t*\mu(x)\longrightarrow f(x)
\quad\text{for Lebesgue-a.e. }x.
\]

At $p=\infty$, uniform recovery holds for bounded uniformly continuous data:

\[
\|P_t*f-f\|_\infty\longrightarrow0
\qquad(f\in\mathrm{BUC}).
\]

For arbitrary $L^\infty$ data, weak-* convergence is the natural general statement.

## 6. Continuous Littlewood–Paley theory and Mikhlin

### Why decompose frequencies when studying a multiplier?

One organizing motivation for Littlewood–Paley theory is the multiplier problem

\[
T_m=\mathcal F^{-1}M_m\mathcal F,
\qquad
M_mg(\xi)=m(\xi)g(\xi),
\qquad
\|T_mf\|_p\stackrel{?}{\lesssim}\|f\|_p.
\]

Plancherel answers this for $p=2$ using only $\|m\|_\infty$. For other exponents, it is useful to split the problem into frequency scales.

To see the architecture, temporarily take $m$ smooth away from zero and $f\in\mathcal S_*$. Choose smooth annular cutoffs

\[
\varphi_j(\xi)=\varphi(2^{-j}\xi),
\qquad
\sum_j\varphi_j(\xi)=1\quad(\xi\ne0),
\]

and let $\widetilde\varphi_j=1$ on $\operatorname{supp}\varphi_j$, with slightly larger annular support. Define

\[
f_j=\mathcal F^{-1}(\varphi_j\widehat f),
\qquad
m_j=m\,\widetilde\varphi_j,
\qquad
k_j=\mathcal F^{-1}m_j.
\]

The Schwartz calculus from Section 0 now gives actual localized convolutions:

\[
\begin{aligned}
f&=\sum_jf_j,\\
T_mf
 &=\sum_j\mathcal F^{-1}(m\widehat f_j)\\
 &=\sum_j\mathcal F^{-1}(m_j\widehat f_j)
 =\boxed{\sum_j k_j*f_j}.
\end{aligned}
\]

There are only finitely many terms for this initial $f$. The general theory asks how to estimate and reconstruct such decompositions uniformly.

This separates two tasks:

| Task | Quantity to control | Source of the estimate |
|---|---|---|
| Measure the input across scales | $\|(\sum_j|f_j|^2)^{1/2}\|_p$ in terms of $\|f\|_p$ | Littlewood–Paley theory |
| Control the localized action | The kernels $k_j=\mathcal F^{-1}m_j$ and their action on $(f_j)_j$ | Regularity assumptions on $m$ |

The second task must give enough uniform kernel structure to assemble a square-function bound. Separate scalar bounds for each $k_j*f_j$ alone do not justify summing the pieces.

### What symbol regularity says about the localized kernels

Write $\widetilde\varphi_j(\xi)=\widetilde\varphi(2^{-j}\xi)$ and rescale to one fixed annulus:

\[
a_j(\eta)=m(2^j\eta)\widetilde\varphi(\eta).
\]

Then

\[
m_j(\xi)=a_j(2^{-j}\xi),
\qquad
k_j(x)=2^{jn}\check a_j(2^jx).
\]

A Mikhlin condition

\[
|\xi|^{|\beta|}|D^\beta m(\xi)|\le B,
\qquad |\beta|\le N,
\]

becomes a uniform estimate on that fixed annulus:

\[
\|D^\beta a_j\|_2\lesssim B,
\qquad |\beta|\le N,
\quad\text{independently of }j.
\]

Plancherel and weighted Cauchy–Schwarz convert it to spatial kernel estimates:

\[
\begin{gathered}
\|(1+|x|)^N\check a_j\|_2\lesssim B,\\
\|\check a_j\|_1
 \le\|(1+|x|)^N\check a_j\|_2
       \|(1+|x|)^{-N}\|_2
 \lesssim B
 \quad(N>n/2),\\
\|k_j\|_1=\|\check a_j\|_1\lesssim B.
\end{gathered}
\]

The derivative threshold $N>n/2$ is already visible here: it makes the inverse weight square-integrable. These bounds explain what a multiplier regularity condition is buying. Combining scales still requires the square-function argument.

### Continuous LP measures the same input at continuous scales

For the Poisson semigroup, define

\[
Q_tf=t\,\partial_t(P_t*f),
\qquad
\widehat{Q_tf}(\xi)=\psi(t\xi)\widehat f(\xi),
\]

\[
\psi(\eta)=-2\pi|\eta|e^{-2\pi|\eta|}.
\]

This is a soft frequency selector concentrated where $t|\xi|$ is of order one, rather than a compactly supported cutoff. The discrete sum is replaced by an integral in $dt/t$:

\[
\left(\sum_j|f_j(x)|^2\right)^{1/2}
\quad\longleftrightarrow\quad
g_1(f)(x)
 =\left(\int_0^\infty|Q_tf(x)|^2\,\frac{dt}{t}\right)^{1/2}.
\]

There is also an exact continuous reproducing identity:

\[
4\int_0^\infty\psi(t\xi)^2\,\frac{dt}{t}=1
\quad(\xi\ne0),
\]

\[
4\int_a^bQ_t^2f\,\frac{dt}{t}
 \longrightarrow f
\quad\text{in }L^2,
\qquad a\downarrow0,\ b\uparrow\infty.
\]

The last integral is understood through finite intervals and an $L^2$ limit; absolute Bochner integrability over all scales is not being asserted for every $L^2$ input.

Our order of proof is important. We first establish the continuous input estimate

\[
\|g_1(f)\|_p\asymp_p\|f\|_p.
\]

We then combine it with kernel estimates derived from regularity of $m$ to prove Mikhlin. The discrete annular theorem is developed afterwards in Section 9; the motivating decomposition above is a roadmap, not a theorem used circularly.

### All scales in one Hilbert space

Write $u_t=P_t*f$, and let $\nabla=\nabla_{x,t}$. Define

\[
g(f)(x)^2=\int_0^\infty t|\nabla u_t(x)|^2\,dt,
\qquad
g_1(f)(x)^2=\int_0^\infty t|\partial_tu_t(x)|^2\,dt.
\]

The linear lift behind $g$ is

\[
\begin{gathered}
H=L^2((0,\infty),t\,dt;\mathbb C^{n+1}),\\
\mathcal Gf(x)=\{\nabla P_t*f(x)\}_{t>0},
\qquad
g(f)(x)=\|\mathcal Gf(x)\|_H.
\end{gathered}
\]

For the $H$-valued kernel $K(x)=\{\nabla P_t(x)\}_{t>0}$,

\[
\begin{aligned}
\|K(x)\|_H^2
 &\lesssim\int_0^\infty
 \frac{t\,dt}{(t^2+|x|^2)^{n+1}}
 \asymp |x|^{-2n},\\
\|D_xK(x)\|_{\mathcal B(\mathbb R^n,H)}^2
 &\lesssim\int_0^\infty
 \frac{t\,dt}{(t^2+|x|^2)^{n+2}}
 \asymp |x|^{-2n-2}.
\end{aligned}
\]

Here $K(x)$ is viewed as an operator $\mathbb C\to H$. Its spatial derivative is

\[
DK(x)[h]
 =\left[t\longmapsto
   \sum_{j=1}^nh_j\partial_{x_j}\nabla P_t(x)\right],
\]

\[
\|DK(x)\|_{\mathcal B(\mathbb R^n,H)}^2
 \le\sum_{j=1}^n
 \int_0^\infty t|\partial_{x_j}\nabla P_t(x)|^2\,dt.
\]

Differentiation into $H$ is justified by dominated convergence locally away from $x=0$. With the regularization $K_\varepsilon$ from Section 4, the Bochner convolution is exactly the classical scale-by-scale convolution viewed as an element of $H$.

These are the size and smoothness bounds from Section 4. The remaining $L^2$ bound is especially transparent. Put $a=2\pi|\xi|$; then

\[
\int_0^\infty ta^2e^{-2at}\,dt=\frac14.
\]

Plancherel gives the exact identities

\[
\boxed{
\|g_1(f)\|_2^2=\frac14\|f\|_2^2,
\qquad
\|g(f)\|_2^2=\frac12\|f\|_2^2.
}
\]

Hilbert-valued Calderón–Zygmund theory now yields

\[
\|g(f)\|_p\lesssim_p\|f\|_p.
\]

One rigorous regularization replaces $P_t$ by $P_{t+\varepsilon}$. The kernel and $L^2$ bounds are uniform in $\varepsilon$; Fatou's lemma passes to the limit. Monotonicity of the shifted integrands is not needed.

### The reverse inequality is a reproducing identity

Polarize the vertical $L^2$ identity:

\[
\langle f,h\rangle
 =4\int_{\mathbb R^n}\int_0^\infty
 t\,\partial_tu_t(x)\,
 \overline{\partial_t(P_t*h)(x)}\,dt\,dx.
\]

Cauchy–Schwarz in $t$, then Hölder in $x$, give

\[
\begin{aligned}
|\langle f,h\rangle|
 &\le4\int g_1(f)(x)g_1(h)(x)\,dx\\
 &\le4\|g_1(f)\|_p\|g_1(h)\|_{p'}\\
 &\lesssim_p\|g_1(f)\|_p\|h\|_{p'}.
\end{aligned}
\]

Take the supremum over $\|h\|_{p'}\le1$:

\[
\boxed{
\|f\|_p\lesssim_p\|g_1(f)\|_p
 \le\|g(f)\|_p\lesssim_p\|f\|_p.
}
\]

Thus the square function records the full $L^p$ norm, although it differentiates the harmonic extension at every height.

For comparison, the PDE identity for positive harmonic $u$ is

\[
\Delta_{x,t}(u^p)=p(p-1)u^{p-2}|\nabla u|^2.
\]

Green identities provide another route to related square-function estimates.

### Vertical rays, cones, and weighted area integrals

For aperture $a>0$, define

\[
\Gamma_a(x)=\{(y,t):|y-x|<at,\ t>0\},
\]

\[
S_a(f)(x)^2
 =\int_{\Gamma_a(x)}t^{1-n}|\nabla u_t(y)|^2\,dy\,dt,
\qquad S=S_1.
\]

The conical square function also has a Hilbert lift:

\[
\mathcal Af(x)(z,t)=t\nabla u_t(x+tz),
\qquad |z|<1,
\]

\[
S(f)(x)^2
 =\int_0^\infty\int_{|z|<1}
 |\mathcal Af(x)(z,t)|^2\,dz\,\frac{dt}{t}.
\]

Its kernel estimates and $L^2$ bound give $\|S(f)\|_p\lesssim_p\|f\|_p$. Mean-value estimates for harmonic derivatives give the pointwise comparison $g(f)\lesssim S(f)$, hence

\[
\|S(f)\|_p\asymp_p\|f\|_p.
\]

To measure nonlocal interactions, define

\[
g_\lambda^*(f)(x)^2
 =\int_0^\infty\int_{\mathbb R^n}
 \left(1+\frac{|x-y|}{t}\right)^{-\lambda n}
 t^{1-n}|\nabla u_t(y)|^2\,dy\,dt.
\]

The weight is bounded below on a cone, so

\[
g(f)\lesssim S(f)\lesssim_\lambda g_\lambda^*(f).
\]

For the upper bound, split space into $|x-y|<t$ and the annuli $2^{\ell-1}t\le|x-y|<2^\ell t$:

\[
g_\lambda^*(f)^2
 \lesssim\sum_{\ell\ge0}2^{-\ell\lambda n}S_{2^\ell}(f)^2.
\]

Together with the standard change-of-aperture estimate

\[
\|S_a(f)\|_p
 \lesssim_p a^{n\max(1/2,1/p)}\|f\|_p,
\qquad a\ge1,
\]

this yields

\[
\boxed{
\|g_\lambda^*(f)\|_p\lesssim_{p,\lambda}\|f\|_p,
\qquad
\lambda>\max(1,2/p).
}
\]

For $p<2$, one sums the $p$th powers of the nonnegative terms; for $p\ge2$, one uses the triangle inequality in $L^{p/2}$.

There is a particularly short proof of the part needed for Mikhlin, namely $p\ge2$ and $\lambda>1$. Put

\[
W_t(z)=t^{-n}(1+|z|/t)^{-\lambda n}.
\]

For $h\ge0$, Fubini and radial maximal domination give

\[
\begin{aligned}
\int g_\lambda^*(f)^2h
 &=\int_0^\infty\int t|\nabla u_t(y)|^2(W_t*h)(y)\,dy\,dt\\
 &\lesssim_\lambda\int g(f)(y)^2Mh(y)\,dy.
\end{aligned}
\]

For $p>2$, apply duality with $q=(p/2)'>1$ and $\|Mh\|_q\lesssim_q\|h\|_q$. At $p=2$, direct integration gives the bound. This proves the required $g^*$ estimate using the already established $g$ bound.

### Mikhlin: the symbol assumptions

Let $N>n/2$ be an integer. Assume

\[
m\in C^N(\mathbb R^n\setminus\{0\}),
\qquad
B:=\max_{|\beta|\le N}
 \sup_{\xi\ne0}|\xi|^{|\beta|}|D^\beta m(\xi)|<\infty.
\]

The goal is

\[
\boxed{\|T_mf\|_p\lesssim_{p,n,N}B\|f\|_p,
\qquad1<p<\infty.}
\]

Here is the continuous LP proof, without using the later dyadic decomposition.

First, higher Poisson derivatives isolate the frequency $|\xi|\asymp t^{-1}$:

\[
\widehat{t^r\partial_t^ru_t}(\xi)
 =(-2\pi t|\xi|)^re^{-2\pi t|\xi|}\widehat f(\xi).
\]

Write

\[
g_r(F)(x)^2
 =\int_0^\infty t^{2r-1}
 |\partial_t^r(P_t*F)(x)|^2\,dt.
\]

### The convolution estimate that makes the proof work

Set $F=T_mf$, $U_t=P_t*F$, and define

\[
M_t=\mathcal F^{-1}
 \left[m(\xi)(-2\pi|\xi|)^Ne^{-\pi t|\xi|}\right].
\]

Splitting the Poisson exponential into two equal factors gives

\[
\partial_t^{N+1}U_t
 =M_t*v_t,
\qquad
v_t=(\partial_su_s)|_{s=t/2}.
\]

This is the continuous counterpart of $k_j*f_j$, not an unrelated convolution introduced for the proof. Indeed, with

\[
\mathcal K_t=t^NM_t
 =\mathcal F^{-1}\left[
 m(\xi)(-2\pi t|\xi|)^Ne^{-\pi t|\xi|}\right],
\]

we have

\[
\boxed{
t^{N+1}\partial_t^{N+1}U_t
 =2\,\mathcal K_t*Q_{t/2}f.
}
\]

The input $Q_{t/2}f$ is a continuous frequency piece. The kernel $\mathcal K_t$ is the correspondingly localized multiplier kernel, with a soft Poisson cutoff. LP theory controls the input square function; the derivative assumptions on $m$ control this kernel. The estimates below combine those two controls.

The multiplier derivative bounds imply

\[
\begin{aligned}
\|M_t\|_2^2&\lesssim B^2t^{-n-2N},\\
\int|z|^{2N}|M_t(z)|^2\,dz&\lesssim B^2t^{-n}.
\end{aligned}
\]

For the second line, Plancherel turns $z^\beta M_t$ into a derivative of its symbol. The relevant estimates are

\[
\left|D^\beta\bigl(|\xi|^Nm(\xi)\bigr)\right|
 \lesssim B|\xi|^{N-|\beta|},
\qquad |\beta|\le N,
\]

\[
\int_0^\infty
 r^{2(N-|\beta|)+n-1}e^{-ct r}\,dr
 \asymp t^{-2(N-|\beta|)-n}.
\]

Leibniz's rule includes powers of $t$ from differentiating the exponential; each term has the same final scaling. Combining the two kernel bounds gives

\[
\int|M_t(z)|^2
 \left(1+\frac{|z|}{t}\right)^{2N}\,dz
 \lesssim B^2t^{-n-2N}.
\]

Now apply weighted Cauchy–Schwarz to the convolution:

\[
\begin{aligned}
|\partial_t^{N+1}U_t(x)|^2
&=\left|\int M_t(z)v_t(x-z)\,dz\right|^2\\
&\lesssim B^2t^{-n-2N}
 \int\left(1+\frac{|z|}{t}\right)^{-2N}
 |v_t(x-z)|^2\,dz.
\end{aligned}
\]

Multiply by $t^{2N+1}$ and integrate. After $t=2s$,

\[
g_{N+1}(T_mf)(x)
 \lesssim B\,g_{2N/n}^*(f)(x).
\]

Finally, weighted Hardy inequalities for the successive $t$-derivatives give

\[
g_r(F)\le r^{-1}g_{r+1}(F),
\qquad
g_1(F)\lesssim_Ng_{N+1}(F).
\]

For example, integration by parts and Cauchy–Schwarz yield

\[
\begin{aligned}
2r\int_0^\infty t^{2r-1}|v(t)|^2dt
 &=-2\operatorname{Re}\int_0^\infty t^{2r}v'(t)\overline{v(t)}\,dt\\
 &\le2
 \left(\int t^{2r+1}|v'|^2\right)^{1/2}
 \left(\int t^{2r-1}|v|^2\right)^{1/2}.
\end{aligned}
\]

Start with frequency-localized smooth inputs so the endpoint terms vanish, then pass by density. Since $2N/n>1$, for $p\ge2$ the complete chain is

\[
\begin{aligned}
\|T_mf\|_p
 &\lesssim_p\|g_1(T_mf)\|_p\\
 &\lesssim_N\|g_{N+1}(T_mf)\|_p\\
 &\lesssim B\|g_{2N/n}^*(f)\|_p
 \lesssim_p B\|f\|_p.
\end{aligned}
\]

Apply the same argument to $T_m^*=T_{\overline m}$ and exponent $p'>2$ to obtain $1<p<2$.

The stronger Hörmander version replaces pointwise derivative bounds by scale-invariant annular bounds:

\[
\|m\|_\infty\le B,\qquad
\sup_{R>0}R^{2|\beta|-n}
 \int_{R<|\xi|<2R}|D^\beta m(\xi)|^2\,d\xi
 \lesssim B^2,\quad |\beta|\le N.
\]

For the elliptic application, the displayed Mikhlin condition suffices.

## 7. Third estimate: a high/low frequency split

### Ellipticity only controls the full symbol at infinity

Let

\[
P(D)=\sum_{|\beta|\le k}a_\beta D^\beta,
\qquad
p(\xi)=\sum_{|\beta|\le k}a_\beta(2\pi i\xi)^\beta.
\]

Write $p=p_k+p_{<k}$. Ellipticity of $p_k$ gives

\[
|p_k(\xi)|\ge c|\xi|^k,
\qquad
|p_{<k}(\xi)|\le C(1+|\xi|)^{k-1}.
\]

Choose $R\ge1$ sufficiently large. Then

\[
|p(\xi)|\ge \frac c2|\xi|^k
\qquad(|\xi|\ge R).
\]

Zeros at bounded frequencies are allowed. For example,

\[
P(D)=I+\Delta,\qquad
p(\xi)=1-4\pi^2|\xi|^2
\]

vanishes on $|\xi|=(2\pi)^{-1}$. A global division by $p$ would be invalid.

### Divide at high frequencies, smooth at low frequencies

Take $\chi\in C^\infty$ with

\[
\chi(\xi)=0\quad(|\xi|\le R),
\qquad
\chi(\xi)=1\quad(|\xi|\ge2R).
\]

For $|\alpha|\le k$, define

\[
m_\alpha(\xi)=\chi(\xi)\frac{(2\pi i\xi)^\alpha}{p(\xi)},
\qquad
b_\alpha(\xi)=(1-\chi(\xi))(2\pi i\xi)^\alpha.
\]

Extend $m_\alpha$ by zero where $\chi=0$. The exact identity is

\[
(2\pi i\xi)^\alpha=m_\alpha(\xi)p(\xi)+b_\alpha(\xi),
\]

\[
D^\alpha f=T_{m_\alpha}(P(D)f)+T_{b_\alpha}f.
\]

Each piece has a different reason to be bounded:

\[
\begin{aligned}
|D^\beta m_\alpha(\xi)|
 &\lesssim|\xi|^{|\alpha|-k-|\beta|}
 \lesssim|\xi|^{-|\beta|}
 &&(|\xi|\ge2R),\\
b_\alpha\in C_c^\infty
 &\Longrightarrow
 \check b_\alpha\in\mathcal S\subset L^1.
\end{aligned}
\]

On the fixed transition annulus, smoothness supplies the same Mikhlin bounds with a larger constant. Therefore

\[
\begin{aligned}
\|D^\alpha f\|_p
 &\le\|T_{m_\alpha}(P(D)f)\|_p
       +\|\check b_\alpha*f\|_p\\
 &\lesssim\|P(D)f\|_p+\|\check b_\alpha\|_1\|f\|_p\\
 &\lesssim\|P(D)f\|_p+\|f\|_p.
\end{aligned}
\]

Sum over $|\alpha|\le k$:

\[
\boxed{
\|f\|_{W^{k,p}}
 \lesssim\|P(D)f\|_p+\|f\|_p.
}
\]

The other direction is immediate:

\[
\|P(D)f\|_p
 \le\sum_{|\beta|\le k}|a_\beta|\|D^\beta f\|_p,
\]

\[
\boxed{
\|f\|_{W^{k,p}}
 \asymp\|P(D)f\|_p+\|f\|_p.
}
\]

### From an a priori bound to actual regularity

Suppose only that $f\in L^p$ and $P(D)f=g\in L^p$ in distributions. For a smooth approximate identity $\rho_\varepsilon$, let $f_\varepsilon=\rho_\varepsilon*f$. Then

\[
P(D)f_\varepsilon=\rho_\varepsilon*g,
\qquad
\|f_\varepsilon\|_{W^{k,p}}
 \lesssim\|g\|_p+\|f\|_p.
\]

For each $|\alpha|\le k$, reflexivity supplies a weakly convergent subsequence

\[
D^\alpha f_{\varepsilon_j}\rightharpoonup v_\alpha
\quad\text{in }L^p.
\]

Distributional convergence identifies the limit:

\[
\langle v_\alpha,\phi\rangle
 =\lim_j(-1)^{|\alpha|}\langle f_{\varepsilon_j},D^\alpha\phi\rangle
 =\langle D^\alpha f,\phi\rangle.
\]

Thus $D^\alpha f=v_\alpha\in L^p$, and

\[
\boxed{
\{f\in L^p:P(D)f\in L^p\text{ distributionally}\}=W^{k,p}.
}
\]

This is the whole-space, constant-coefficient conclusion behind Stein's Chapter IV, §7.9. The distinction from (E2) is the low-frequency remainder $T_{b_\alpha}f$, which explains the extra $\|f\|_p$ term.

## 8. Randomization and vector-valued bounds

### Khinchine turns a square sum into random linear combinations

Let $\varepsilon_j$ be independent Rademacher variables:

\[
\mathbb P(\varepsilon_j=1)=\mathbb P(\varepsilon_j=-1)=\frac12.
\]

For a finite scalar family $(a_j)$,

\[
\mathbb E\left|\sum_j\varepsilon_ja_j\right|^p
 \asymp_p\left(\sum_j|a_j|^2\right)^{p/2}.
\]

Tonelli gives the function-valued form:

\[
\mathbb E\left\|\sum_j\varepsilon_jf_j\right\|_p^p
 \asymp_p
 \left\|\left(\sum_j|f_j|^2\right)^{1/2}\right\|_p^p.
\]

### Any one bounded linear operator extends coordinatewise

Let $T:L^p(X)\to L^p(X)$ be bounded and linear. Then

\[
\begin{aligned}
\left\|\left(\sum_j|Tf_j|^2\right)^{1/2}\right\|_p^p
 &\lesssim_p\mathbb E\left\|\sum_j\varepsilon_jTf_j\right\|_p^p\\
 &=\mathbb E\left\|T\left(\sum_j\varepsilon_jf_j\right)\right\|_p^p\\
 &\le\|T\|_{p\to p}^p
       \mathbb E\left\|\sum_j\varepsilon_jf_j\right\|_p^p\\
 &\lesssim_p\|T\|_{p\to p}^p
       \left\|\left(\sum_j|f_j|^2\right)^{1/2}\right\|_p^p.
\end{aligned}
\]

So the Marcinkiewicz–Zygmund inequality is

\[
\boxed{
\|(Tf_j)_j\|_{L^p(\ell^2)}
 \le C_p\|T\|_{p\to p}\|(f_j)_j\|_{L^p(\ell^2)}.
}
\]

The constant is independent of the number of coordinates. Completion gives

\[
T\otimes I_{\ell^2}:L^p(X;\ell^2)\to L^p(X;\ell^2).
\]

For a complex-linear $T$, circular complex Gaussian variables $\gamma_j$ even give equality of extension norms, because

\[
\mathbb E\left|\sum_j\gamma_ja_j\right|^p
 =c_p\left(\sum_j|a_j|^2\right)^{p/2}
\]

with the same $c_p$ on both sides of the operator estimate.

The scope is precise: **the same $T$ acts on every coordinate**. Bounds $\sup_j\|T_j\|_{p\to p}<\infty$ alone do not supply the corresponding estimate for $(T_jf_j)_j$. The changing interval projections below require an extra argument.

This Marcinkiewicz–Zygmund inequality is distinct from the Marcinkiewicz multiplier theorem; the latter is outside these notes.

## 9. Soft and hard dyadic decompositions

### A smooth partition of frequency space

Choose a real radial cutoff $\eta\in C_c^\infty$ that is one on $|\xi|\le1$ and zero on $|\xi|\ge2$. Set

\[
\varphi(\xi)=\eta(\xi)-\eta(2\xi),
\qquad
\varphi_j(\xi)=\varphi(2^{-j}\xi).
\]

Then

\[
\operatorname{supp}\varphi\subset\{1/2\le|\xi|\le2\},
\qquad
\sum_{j\in\mathbb Z}\varphi_j(\xi)=1\quad(\xi\ne0).
\]

Define the soft frequency pieces and their square function:

\[
\widehat{\Delta_jf}=\varphi_j\widehat f,
\qquad
S_{\mathrm{soft}}f
 =\left(\sum_{j\in\mathbb Z}|\Delta_jf|^2\right)^{1/2}.
\]

For algebraic identities, begin in the dense class

\[
\mathcal S_*=\mathcal F^{-1}
 \bigl(C_c^\infty(\mathbb R^n\setminus\{0\})\bigr).
\]

Density in $L^p$, $1<p<\infty$, follows by cutting off high and very low frequencies of Schwartz functions. The low-frequency error tends to zero since

\[
\|\mathcal F^{-1}[\eta(\xi/\varepsilon)\widehat h]\|_p
 \le\|h\|_1\,\varepsilon^{n(1-1/p)}\|\check\eta\|_p
 \longrightarrow0
\quad(h\in\mathcal S).
\]

The high-frequency cutoff is an ordinary approximate identity.

### Random signs plus Mikhlin give the upper bound

For a finite index set $F$ and arbitrary signs, put

\[
m_{\varepsilon,F}(\xi)
 =\sum_{j\in F}\varepsilon_j\varphi_j(\xi).
\]

Finite overlap is the crucial calculation:

\[
\begin{aligned}
|D^\beta m_{\varepsilon,F}(\xi)|
 &\le\sum_{j:\,|\xi|\asymp2^j}
 2^{-j|\beta|}|D^\beta\varphi(2^{-j}\xi)|\\
 &\lesssim_\beta|\xi|^{-|\beta|}.
\end{aligned}
\]

The bound is uniform in $F$ and the signs. Mikhlin gives

\[
\left\|\sum_{j\in F}\varepsilon_j\Delta_jf\right\|_p
 \lesssim_p\|f\|_p.
\]

Randomize and use Khinchine:

\[
\begin{aligned}
\left\|\left(\sum_{j\in F}|\Delta_jf|^2\right)^{1/2}\right\|_p^p
 &\asymp_p\mathbb E
 \left\|\sum_{j\in F}\varepsilon_j\Delta_jf\right\|_p^p\\
 &\lesssim_p\|f\|_p^p.
\end{aligned}
\]

Monotone convergence over finite sets yields

\[
\|S_{\mathrm{soft}}f\|_p\lesssim_p\|f\|_p.
\]

The same proof works for any uniformly smooth annular family with finite overlap, even if it is not a partition of unity.

### Reconstruction and duality give the lower bound

Choose real $\widetilde\varphi\in C_c^\infty(\mathbb R^n\setminus\{0\})$ equal to one on $\operatorname{supp}\varphi$. Let $\widetilde\Delta_j$ have symbol $\widetilde\varphi(2^{-j}\xi)$. Then

\[
\sum_j\varphi_j(\xi)\widetilde\varphi(2^{-j}\xi)=1,
\qquad
f=\sum_j\widetilde\Delta_j\Delta_jf
\quad(f\in\mathcal S_*).
\]

For $h\in\mathcal S_*$,

\[
\begin{aligned}
|\langle f,h\rangle|
 &=\left|\sum_j\langle\Delta_jf,\widetilde\Delta_jh\rangle\right|\\
 &\le\int
 \left(\sum_j|\Delta_jf|^2\right)^{1/2}
 \left(\sum_j|\widetilde\Delta_jh|^2\right)^{1/2}\\
 &\lesssim_p\|S_{\mathrm{soft}}f\|_p\|h\|_{p'}.
\end{aligned}
\]

Duality and density prove

\[
\boxed{
\|f\|_p\asymp_p
 \left\|\left(\sum_j|\Delta_jf|^2\right)^{1/2}\right\|_p,
\qquad1<p<\infty.
}
\]

The continuous and discrete scales now match:

\[
t^r\partial_t^rP_t*f:\ |\xi|\asymp t^{-1},
\qquad
\Delta_jf:\ |\xi|\asymp2^j,
\qquad
t\asymp2^{-j}.
\]

### Sharp intervals need the Hilbert transform

In one dimension, let

\[
I_j^+=(2^j,2^{j+1}),
\qquad
I_j^-=(-2^{j+1},-2^j),
\qquad j\in\mathbb Z.
\]

Endpoints have measure zero. For any such interval $I$,

\[
\widehat{S_If}=\mathbf1_I\widehat f.
\]

The symbol $\mathbf1_I$ is discontinuous, so the Mikhlin theorem does not apply to it. Instead, define

\[
P_+=\frac12(I+iH),
\qquad
\widehat{P_+f}=\mathbf1_{(0,\infty)}\widehat f,
\qquad
M_af(x)=e^{2\pi iax}f(x).
\]

For $I=(a,b)$,

\[
\boxed{
S_{(a,b)}=M_aP_+M_{-a}-M_bP_+M_{-b}.
}
\]

This is simply

\[
\mathbf1_{(a,b)}(\xi)
 =\mathbf1_{(a,\infty)}(\xi)-\mathbf1_{(b,\infty)}(\xi).
\]

For a family $I_\nu=(a_\nu,b_\nu)$, coordinatewise modulation is isometric:

\[
\|(M_{a_\nu}g_\nu)_\nu\|_{L^p(\ell^2)}
 =\|(g_\nu)_\nu\|_{L^p(\ell^2)}.
\]

Apply Section 8 to the one fixed operator $P_+$:

\[
\begin{aligned}
\|(S_{I_\nu}g_\nu)_\nu\|_{L^p(\ell^2)}
 &\le
 \|(P_+M_{-a_\nu}g_\nu)_\nu\|_{L^p(\ell^2)}
 +\|(P_+M_{-b_\nu}g_\nu)_\nu\|_{L^p(\ell^2)}\\
 &\lesssim_p\|(g_\nu)_\nu\|_{L^p(\ell^2)}.
\end{aligned}
\]

Unlike a bare uniform scalar bound for $S_{I_\nu}$, this calculation handles the changing intervals.

### From soft pieces to hard pieces

For each signed dyadic interval $I_\nu$, choose a smooth cutoff $\widetilde\varphi_\nu$ equal to one on $I_\nu$, supported in a slightly larger annulus, with uniform scaled derivative bounds. Then

\[
S_{I_\nu}f=S_{I_\nu}\widetilde\Delta_\nu f.
\]

The interval estimate and the soft upper bound give

\[
\begin{aligned}
\left\|\left(\sum_\nu|S_{I_\nu}f|^2\right)^{1/2}\right\|_p
 &\lesssim_p
 \left\|\left(\sum_\nu|\widetilde\Delta_\nu f|^2\right)^{1/2}\right\|_p\\
 &\lesssim_p\|f\|_p.
\end{aligned}
\]

For the lower bound, disjointness and completeness of the intervals give, initially in $L^2$,

\[
\sum_\nu\mathbf1_{I_\nu}=1\quad\text{a.e.},
\qquad
\langle f,h\rangle
 =\sum_\nu\langle S_{I_\nu}f,S_{I_\nu}h\rangle.
\]

Therefore

\[
|\langle f,h\rangle|
 \le
 \left\|\left(\sum_\nu|S_{I_\nu}f|^2\right)^{1/2}\right\|_p
 \left\|\left(\sum_\nu|S_{I_\nu}h|^2\right)^{1/2}\right\|_{p'}.
\]

Use the upper bound at $p'$ and duality:

\[
\boxed{
\|f\|_p\asymp_p
 \left\|\left(\sum_\nu|S_{I_\nu}f|^2\right)^{1/2}\right\|_p.
}
\]

### Higher dimensions: tensorize into rectangles

For

\[
\rho=I_{\nu_1}\times\cdots\times I_{\nu_n},
\]

the sharp projection factors coordinatewise:

\[
S_\rho=S_{I_{\nu_1}}^{(1)}\cdots S_{I_{\nu_n}}^{(n)},
\qquad
\widehat{S_\rho f}=\mathbf1_\rho\widehat f.
\]

The one-dimensional LP estimate also holds for Hilbert-valued inputs. To see the mechanism, write a finite orthonormal expansion $F=\sum_r f_r e_r$. Hilbert-valued Khinchine and the scalar LP estimate give

\[
\begin{aligned}
\|(S_{I_\nu}F)_\nu\|_{L^p(\ell^2(H))}^p
 &\asymp_p\mathbb E_\varepsilon
 \left\|\left(S_{I_\nu}\sum_r\varepsilon_rf_r\right)_\nu
 \right\|_{L^p(\ell^2)}^p\\
 &\asymp_p\mathbb E_\varepsilon
 \left\|\sum_r\varepsilon_rf_r\right\|_p^p\\
 &\asymp_p\|F\|_{L^p(H)}^p.
\end{aligned}
\]

The constants are independent of the Hilbert dimension; completion handles separable $H$.

Fubini and that Hilbert-valued estimate allow one coordinate at a time:

\[
\begin{aligned}
\|f\|_{L^p(\mathbb R^n)}
 &\asymp_p
 \|(S_{I_{\nu_1}}^{(1)}f)_{\nu_1}\|_{L^p(\ell^2_{\nu_1})}\\
 &\asymp_p
 \|(S_{I_{\nu_2}}^{(2)}S_{I_{\nu_1}}^{(1)}f)_{\nu_1,\nu_2}
   \|_{L^p(\ell^2_{\nu_1,\nu_2})}\\
 &\asymp_{p,n}
 \left\|\left(\sum_\rho|S_\rho f|^2\right)^{1/2}\right\|_p.
\end{aligned}
\]

This is the dyadic-rectangle conclusion of Chapter IV, Theorem 5. It concerns rectangles, not sharp radial shells. Arbitrary random signs on rectangles need not satisfy the isotropic Mikhlin condition; tensorization is the separate ingredient.

## 10. What the three estimates have in common

The part of Stein I most want to retain can be compressed into four representations:

| Object that looks difficult | Representation that reveals its structure |
|---|---|
| Riesz multiplier | $m(U\xi)=Um(\xi)$ and $m(t\xi)=m(\xi)$ force $m=c\xi/|\xi|$ |
| Angular inversion | $A=\sum_{\ell\ge1}\gamma_\ell\Pi_\ell$, with $|\gamma_\ell|\asymp\ell^{-n/2}$ on mean-zero functions |
| Continuous square function | $g(f)(x)=\|\mathcal Gf(x)\|_H$ |
| A quadratic sum | $\|(\sum|f_j|^2)^{1/2}\|_p^p\asymp_p\mathbb E\|\sum\varepsilon_jf_j\|_p^p$ |

The PDE route is

\[
\begin{gathered}
\text{cancellation + kernel regularity}
 \ \Longrightarrow\ L^p\text{ bounds},\\
\text{ellipticity}
 \ \Longrightarrow\ D^\alpha f=T_m(P(D)f)
 \ \Longrightarrow\ \text{derivative estimates}.
\end{gathered}
\]

The scale-analysis route is

\[
\begin{gathered}
g,\ S,\ g^*
 \ \Longrightarrow\ \text{Mikhlin},\\
\text{Mikhlin + randomization}
 \ \Longrightarrow\ \text{soft dyadic LP},\\
\text{soft LP + interval projections}
 \ \Longrightarrow\ \text{hard dyadic LP}.
\end{gathered}
\]

These are whole-space, constant-coefficient estimates. The next difficulties already have recognizable formulas. Localization introduces commutators,

\[
P(D)(\chi f)=\chi P(D)f+[P(D),\chi]f,
\]

while variable coefficients prevent exact Fourier diagonalization. For $a,f\in\mathcal S$, for example,

\[
\mathcal F[a(x)D^\alpha f]
 =\widehat a*\bigl[(2\pi i\xi)^\alpha\widehat f\bigr]
\]

so multiplication by $a$ becomes convolution in frequency. For $f,g\in\mathcal S_*$, products already mix the pieces:

\[
fg=\sum_{j,k}(\Delta_jf)(\Delta_kg).
\]

Those are natural entry points to localization, pseudodifferential operators, Besov spaces, and paraproducts. For this reading, I stop at the hard dyadic estimates: the three elliptic bounds and the two square-function decompositions already form a substantial closed circuit.

---

**Reading references.** E. M. Stein, *Singular Integrals and Differentiability Properties of Functions* (1970): Chapter II §§2–5 for singular integrals and their Hilbert-valued extension; Chapter III §§1–3 for Riesz transforms, harmonic extensions, and spherical harmonics; Chapter IV §§1–5 and §7.9 for continuous LP, multipliers, dyadic decompositions, and elliptic estimates. The compact-normal interpretation of $A$ and the expanded endpoint trace discussion are additional reconstructions. For their functional-analytic background, see W. Rudin, *Functional Analysis*. For later dyadic regularity theory, see L. Grafakos, *Fundamentals of Fourier Analysis*, and H. Bahouri, J.-Y. Chemin, R. Danchin, *Fourier Analysis and Nonlinear Partial Differential Equations*.
