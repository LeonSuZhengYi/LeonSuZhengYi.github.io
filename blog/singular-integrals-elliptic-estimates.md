---
title: "Singular Integrals and Elliptic Estimates: Reading Stein, Chapters I–IV"
date: 2026-10-24
description: "Three elliptic estimates as a path through Calderón–Zygmund theory, Riesz transforms, spherical harmonics, and Littlewood–Paley theory."
slug: singular-integrals-elliptic-estimates
---

# Singular Integrals and Elliptic Estimates: Reading Stein, Chapters I–IV

*Notes on Elias M. Stein, Singular Integrals and Differentiability Properties of Functions, Chapters I–IV.*

I have decided to pause my first reading of Stein's *Singular Integrals* after the dyadic Littlewood–Paley estimates in Chapter IV, together with the elliptic application in §7.9. The four chapters already form a remarkably coherent piece of analysis. Rather than write four separate chapter summaries, I want to reconstruct the part of the book that interested me most: **how singular-integral estimates become a priori estimates for elliptic differential operators**.

Three estimates organize the discussion. For $1<p<\infty$, with $f$ initially smooth and compactly supported, they are

\[
\begin{gathered}
\|\partial_xf\|_p+\|\partial_yf\|_p
 \lesssim_p \|(\partial_x+i\partial_y)f\|_p,\\
\|\partial_i\partial_jf\|_p\lesssim_{p,n}\|\Delta f\|_p;\\[6pt]
\|D^\alpha f\|_p\lesssim_{p,P}\|P_k(D)f\|_p,
\quad |\alpha|=k;\\[6pt]
\|f\|_{W^{k,p}}\lesssim_{p,P}\|P(D)f\|_p+\|f\|_p.
\end{gathered}
\]

The first pair uses Riesz transforms. In the second estimate, $P_k$ is homogeneous elliptic of degree $k$; the proof uses the correspondence between smooth homogeneous singular kernels and smooth homogeneous Fourier multipliers, established via spherical harmonics. In the third, $P$ is a general constant-coefficient elliptic operator of order $k$. This estimate uses Mikhlin's multiplier theorem and a high-/low-frequency decomposition; the proof of Mikhlin's theorem, in turn, uses continuous Littlewood–Paley theory and Hilbert-space-valued singular integrals. Throughout, $D^\alpha=\partial^\alpha$.

What makes this route compelling is that it repeatedly turns an analytic problem into a more structured operator problem:

\[
\boxed{\text{ellipticity of a symbol}
\ \longrightarrow\ \text{bounded Fourier multiplier}
\ \longrightarrow\ \text{control of derivatives}.}
\]

The Hilbert transform already has its own [construction and applications note](hilbert-transform-construction-and-applications.html). Here I want to understand how that one-dimensional example grows into a theory in $\mathbb R^n$.

Several proofs in Stein are remarkably compressed. During this reading I found it useful to reconstruct their functional-analytic foundations—Schwartz spaces, Bochner integration, operator-valued kernels, and the spectral theory of a certain compact normal operator on the sphere. I will include those reconstructions where they illuminate the argument, rather than as a separate catalogue of prerequisites.

## 1. The real-variable engine: cancellation and Calderón–Zygmund theory

The starting point is the Hardy–Littlewood maximal operator

\[
Mf(x)=\sup_{r>0}\frac{1}{|B(x,r)|}\int_{B(x,r)}|f(y)|\,dy.
\]

Its weak $(1,1)$ inequality and strong $L^p$ estimates ($1<p\le\infty$) provide a general way to pass from local averages to control of distribution functions. The Calderón–Zygmund decomposition develops this principle for problems where positivity is no longer available.

At height $\lambda>0$, we split an integrable function as

\[
f=g+b,\qquad b=\sum_Q b_Q,
\]

where $\|g\|_1\lesssim\|f\|_1$, $g$ is bounded by a constant multiple of $\lambda$, the cubes $Q$ occupy total measure $\lesssim\lambda^{-1}\|f\|_1$, and every bad piece has cancellation:

\[
\int_Q b_Q=0.
\]

The geometry of those cubes matters. Whitney-type decompositions allow one to subordinate cubes to a bad region while keeping their size comparable with the distance to its complement; this is not quite the same geometric task as a Vitali covering argument. For the singular-integral proof, the essential property is that the bad pieces are spatially localized and have mean zero.

Consider a homogeneous singular kernel

\[
K(x)=\frac{\Omega(x/|x|)}{|x|^n},\qquad
\int_{S^{n-1}}\Omega(\theta)\,d\sigma(\theta)=0.
\]

For nonzero $\Omega$, the kernel is not absolutely locally integrable at the origin. If $\Omega$ is smooth with zero mean, cancellation nevertheless defines a principal-value distribution. On a Schwartz test function $\phi$, its contribution near zero can be written as

\[
\int_{|y|<1}K(y)[\phi(y)-\phi(0)]\,dy.
\]

The bracket supplies one power of $|y|$, making this integral absolutely convergent. This constructs the distribution; identifying its action on general $L^p$ functions with almost-everywhere principal values requires a further convergence theorem. Moreover, regularity such as $|\nabla K(x)|\lesssim |x|^{-n-1}$ implies the Hörmander difference estimate

\[
\sup_{h\ne0}\int_{|x|>2|h|}|K(x-h)-K(x)|\,dx<\infty.
\]

If $c_Q$ is the center of a bad cube and $x$ is away from that cube, the zero integral of $b_Q$ gives

\[
Tb_Q(x)=\int_Q\bigl[K(x-y)-K(x-c_Q)\bigr]b_Q(y)\,dy.
\]

**The bad function need not be small; its integral is zero.** This allows spatial regularity of the kernel to replace the otherwise nonintegrable size bound. The good part is controlled by

\[
|\{|Tg|>\lambda\}|\lesssim\lambda^{-2}\|g\|_2^2
\lesssim\lambda^{-1}\|f\|_1.
\]

For the bad part, enlarge the bad cubes by a fixed dimensional factor. Outside their union, the difference estimate and the cancellation identity give

\[
\int_{(Q^*)^c}|Tb_Q(x)|\,dx\lesssim\|b_Q\|_1.
\]

The enlarged cubes themselves occupy measure $\lesssim\lambda^{-1}\|f\|_1$. Summation and Chebyshev's inequality therefore give weak $(1,1)$. Interpolation gives $1<p\le2$; applying the same argument to the adjoint gives $2<p<\infty$, assuming its corresponding kernel hypotheses. Thus

\[
\|Tf\|_p\lesssim_p\|f\|_p,\qquad 1<p<\infty.
\]

This is the real-variable mechanism we will reuse: *cancellation of the input* together with *smoothness of the kernel*. The same ideas, with suitable care, continue to work for Hilbert-valued functions.

### Putting Fourier operations on a legitimate footing

For these arguments, Schwartz space is not merely a convenient class of rapidly decaying examples. It is a place where the manipulations underlying the theory can be stated without ambiguity. The Fourier transform is an automorphism of $\mathcal S(\mathbb R^n)$ and extends by duality to tempered distributions $\mathcal S'$. Consequently, one can first interpret singular kernels distributionally, identify their Fourier multipliers, and only then use $L^p$ estimates to obtain bounded extensions.

The topology on $\mathcal S$ is given by the seminorms

\[
q_{\alpha,\beta}(\phi)=\sup_x|x^\alpha\partial^\beta\phi(x)|.
\]

A tempered distribution is a continuous linear functional for this topology. Differentiation and Fourier transformation are continuous operations on $\mathcal S$, so their transposes define operations on $\mathcal S'$. An $L^p$ function, $1\le p\le\infty$, defines such a distribution by Hölder's inequality against Schwartz functions. This is the common space in which the Fourier identities below live, including when a Fourier transform is not an ordinary function. A distributional identity does not itself imply an $L^p$ estimate: that is the work done by the multiplier theorems.

Throughout this note I use

\[
\widehat f(\xi)=\int_{\mathbb R^n}e^{-2\pi ix\cdot\xi}f(x)\,dx.
\]

This convention determines the signs of the Riesz multipliers below. Stein uses a different Fourier-sign convention in places, so the sign should not be carried over mechanically.

An important elementary principle is that a bounded translation-invariant operator on $L^2(\mathbb R^n)$ is a multiplier operator,

\[
T=\mathcal F^{-1}M_m\mathcal F,\qquad
\|T\|_{2\to2}=\|m\|_{L^\infty}.
\]

For $p\ne2$, mere boundedness of $m$ is insufficient. The point of much of the subsequent theory is to find *additional structure* that guarantees $L^p$ boundedness.

## 2. First estimate: determine Riesz transforms by symmetry

One of my favorite proofs in Chapter III does not begin by evaluating a Fourier integral. Instead, it asks what the multiplier of a geometrically natural vector-valued operator could possibly be.

Suppose $T=(T_1,\ldots,T_n)$ is a tuple of bounded $L^2$ operators that commutes with translations and positive dilations and transforms covariantly under orthogonal changes of coordinates. Translation invariance gives a vector multiplier $m(\xi)$. Dilation invariance gives

\[
m(t\xi)=m(\xi),\qquad t>0,
\]

and orthogonal covariance says

\[
m(U\xi)=Um(\xi),\qquad U\in O(n).
\]

After choosing the equivariant spherical representative of this multiplier (the original $L^\infty$ multiplier is defined only almost everywhere), fix $\xi\ne0$. Every orthogonal transformation fixing $\xi$ must also fix $m(\xi)$. The only vectors fixed by the entire stabilizer of $\xi$ are multiples of $\xi$. Dilation invariance and rotation covariance therefore force

\[
\boxed{m(\xi)=c\frac{\xi}{|\xi|}.}
\]

The use of the full orthogonal group is worth noting. In two dimensions, covariance only under $SO(2)$ would also allow the tangential vector field $J\xi/|\xi|$; reflections remove this possibility. This is a particularly clean example of **using a geometric characterization to avoid a difficult direct calculation**. One then verifies that the candidate singular kernels have the required symmetries. Symmetry determines the form up to the single scalar $c$; the normalization can be calibrated by the Poisson-kernel identity $R_j\partial_tP_t=-\partial_jP_t$.

The Riesz transforms are

\[
R_jf(x)=c_n\,\operatorname{p.v.}\int_{\mathbb R^n}
\frac{y_j}{|y|^{n+1}}f(x-y)\,dy,
\qquad
\widehat{R_jf}(\xi)=-i\frac{\xi_j}{|\xi|}\widehat f(\xi).
\]

By the singular-integral theorem, $R_j$ is bounded on $L^p$ for $1<p<\infty$. The multiplier identity $\sum_jR_j^2=-I$ already suggests that Riesz transforms can mediate between different combinations of partial derivatives.

For the Laplacian, a direct Fourier calculation yields

\[
\partial_i\partial_jf=-R_iR_j\Delta f,
\]

hence

\[
\boxed{\|\partial_i\partial_jf\|_p\lesssim\|\Delta f\|_p.}
\]

In two dimensions, set $\bar D=\partial_x+i\partial_y=2\partial_{\bar z}$. For *complex-valued* $f$,

\[
\partial_jf=-R_j(R_1-iR_2)\bar Df,\qquad j=1,2,
\]

so

\[
\boxed{\|\partial_xf\|_p+\|\partial_yf\|_p
\lesssim\|\bar Df\|_p.}
\]

The complex-valued qualification matters: for real-valued $f$, the pointwise magnitude of $\bar Df$ already contains both partial derivatives. The interest of the estimate is that one complex differential expression controls the two derivatives of a complex-valued function.

Both examples have the same algebraic form:

\[
D^\alpha f=T_m(P(D)f).
\]

Once $T_m$ is $L^p$-bounded, the PDE estimate follows. Our next task is to recognize the much larger class of multipliers arising from higher-order elliptic symbols.

## 3. Second estimate: homogeneous elliptic operators and an operator on the sphere

Let $P_k$ be a homogeneous elliptic polynomial of degree $k$ on $\mathbb R^n$:

\[
P_k(\xi)\ne0\quad(\xi\ne0).
\]

For $|\alpha|=k$, the quotient

\[
m_\alpha(\xi)=\frac{\xi^\alpha}{P_k(\xi)}
\]

is smooth away from the origin and homogeneous of degree zero. If every such multiplier is bounded on $L^p$, then the Fourier identity immediately gives

\[
\boxed{\|D^\alpha f\|_p\lesssim\|P_k(D)f\|_p,
\qquad |\alpha|=k.}
\]

Stein's Chapter III provides exactly the missing multiplier theorem, but by a route different from the Mikhlin theorem developed later: **a smooth degree-zero multiplier is a constant plus the multiplier of a smooth homogeneous singular integral**.

### The angular kernel-to-multiplier map

Write a singular kernel as $K(x)=|x|^{-n}\Omega(x/|x|)$, where $\Omega$ is smooth and has zero spherical mean. Its multiplier depends only on $\theta=\xi/|\xi|$ and, with the present Fourier convention and consistent choice of the kernel normalization, has the form

\[
(A\Omega)(\theta)
=\int_{S^{n-1}}\Gamma(\theta\cdot\omega)
\Omega(\omega)\,d\sigma(\omega),
\qquad
\Gamma(t)=\log\frac1{|t|}-\frac{i\pi}{2}\operatorname{sgn}(t).
\]

Here $d\sigma$ is the usual, unnormalized surface measure. The minus sign in the imaginary term is tied to our negative-exponent Fourier convention; the corresponding sign in Stein is positive.

One can see the origin of this formula by writing the Fourier integral in polar coordinates. Inserting a radial damping factor gives the elementary identity

\[
\int_0^\infty
\frac{e^{-(\delta+2\pi i a)r}-e^{-r}}r\,dr
=-\log(\delta+2\pi i a),\qquad\delta>0.
\]

As $\delta\downarrow0$, its imaginary part is $-\frac\pi2\operatorname{sgn}a$. The additive constant $-\log(2\pi)$ disappears after integration against $\Omega$. The radial integral contains $dr/r$; subtraction made possible by $\int\Omega=0$ removes the divergent part and yields the logarithmic and sign terms. The unwanted $\log|\xi|$ contribution disappears precisely because $\Omega$ has mean zero. The multiplier is therefore homogeneous of degree zero.

I found it helpful to stop here and study $A$ as an actual operator on $L^2(S^{n-1})$ (for $n\ge2$), rather than immediately proceed with formal spherical-harmonic series.

First, the angular kernel is square-integrable:

\[
\int_{S^{n-1}}\int_{S^{n-1}}
|\Gamma(\theta\cdot\omega)|^2
\,d\sigma(\theta)d\sigma(\omega)<\infty,
\]

because the only singularity is logarithmic and $\int_0^1|\log t|^2dt<\infty$. Thus $A$ is Hilbert–Schmidt, hence compact.

Second, write $A=B-iC$, with $B$ the real logarithmic-kernel operator and $C$ the real sign-kernel operator (including its factor $\pi/2$). Both kernels are symmetric, so $B$ and $C$ are self-adjoint. The logarithmic kernel is even in the inner product, and the sign kernel is odd. Thus $B$ kills odd functions and has even output, while $C$ kills even functions and has odd output. In particular $BC=CB=0$. Consequently

\[
AA^*=A^*A:
\qquad\boxed{A\text{ is compact and normal}.}
\]

### Spherical harmonics as an explicit spectral decomposition

The space of square-integrable spherical functions decomposes orthogonally as

\[
L^2(S^{n-1})=\widehat{\bigoplus}_{k\ge0}\mathcal H_k,
\]

where $\mathcal H_k$ is the restriction to the sphere of homogeneous harmonic polynomials of degree $k$. The spherical Laplacian has eigenvalue $k(k+n-2)$ on $\mathcal H_k$, and the restrictions of polynomials are dense. This makes the decomposition both explicit and complete. The Funk–Hecke formula shows that a zonal integral kernel, depending only on $\theta\cdot\omega$, acts as a scalar on each $\mathcal H_k$. The higher-Riesz-transform calculation in Stein's Chapter III, Theorem 5 identifies these scalars for $k\ge1$:

\[
A|_{\mathcal H_k}=\gamma_k I,
\qquad
\gamma_k=(-i)^k\pi^{n/2}
\frac{\Gamma(k/2)}{\Gamma((n+k)/2)}.
\]

In particular,

\[
\gamma_k\ne0,
\qquad |\gamma_k|\asymp k^{-n/2}.
\]

This spectral information completes the correspondence. If $\Omega=\sum_{k\ge1}\Omega_k$ has zero mean, then

\[
A\Omega=\sum_{k\ge1}\gamma_k\Omega_k.
\]

Conversely, for a smooth zero-mean spherical multiplier $m=\sum_{k\ge1}m_k$, the formal inverse is

\[
A^{-1}m=\sum_{k\ge1}\gamma_k^{-1}m_k.
\]

There is an important functional-analytic distinction here. Because $A$ is compact and $\gamma_k\to0$, **$A^{-1}$ is not bounded on all of mean-zero $L^2$**. But multiplication by $\gamma_k^{-1}=O(k^{n/2})$ only loses a fixed polynomial number of angular derivatives. Smooth spherical functions have rapidly decreasing harmonic coefficients. Hence $A$ is a continuous isomorphism on the Fréchet space of smooth mean-zero functions:

\[
\boxed{A:C^\infty_{\mathrm{mean}=0}(S^{n-1})\overset{\sim}{\longrightarrow}
C^\infty_{\mathrm{mean}=0}(S^{n-1}).}
\]

More precisely, writing $H^s_0$ for the mean-zero spherical Sobolev space, we have for every real $s$

\[
\|A\Omega\|_{H^{s+n/2}}\asymp\|\Omega\|_{H^s},
\qquad A:H^s_0\longrightarrow H^{s+n/2}_0.
\]

The inverse is bounded between these two different spaces. On $L^2_0$ itself, the range is $H^{n/2}_0$, a dense proper subspace; a compact operator here cannot have an everywhere-defined bounded inverse. On $C^\infty_0=\bigcap_sH^s_0$, the loss of a fixed number of derivatives preserves continuity in the Fréchet topology.

There is one last identification to check. For a prescribed smooth $m$ with mean $c$, define $\Omega_k=\gamma_k^{-1}m_k$ and $\Omega_N=\sum_{k=1}^N\Omega_k$. The finite sums satisfy the angular integral formula. Uniformly in $\theta$,

\[
|A(\Omega-\Omega_N)(\theta)|
\le C_\Gamma\|\Omega-\Omega_N\|_2\longrightarrow0,
\]

because the $L^2$ norm of $\Gamma(\theta\cdot\omega)$ is independent of $\theta$. Smoothness also gives uniform convergence of $\sum_{k=1}^Nm_k$ to $m-c$. Thus the constructed kernel really has multiplier $m-c$; this is more than a formal inversion of a harmonic series.

This was the useful missing functional-analytic picture behind Stein's spherical-harmonic argument: **compactness on $L^2$ is compatible with continuous invertibility on $C^\infty$**.

Adding the degree-zero constant harmonic gives Stein's Chapter III, Theorem 6:

\[
\boxed{\begin{array}{c}
\text{smooth degree-zero homogeneous multiplier}\\[2pt]
\Updownarrow\\[2pt]
cI+\text{principal-value operator with smooth}\\
\text{homogeneous, mean-zero angular kernel}.
\end{array}}
\]

The $L^p$ estimate for this singular integral is already available from Chapter II. Applied to $m_\alpha=\xi^\alpha/P_k(\xi)$, it produces the second elliptic estimate. In this way, a PDE estimate rests on an explicit compact-normal spectral problem on the unit sphere.

## 4. A necessary detour: Hilbert-valued singular integrals

To reach the more general Mikhlin theorem, Stein introduces Littlewood–Paley functions built from *all scales at once*. This requires singular integrals taking values in a Hilbert space. The extension is conceptually natural, but it deserves more foundations than the book gives it.

Let $H_1,H_2$ be separable Hilbert spaces and consider an operator kernel

\[
K(x)\in\mathcal B(H_1,H_2).
\]

For $H_1$-valued $f$, the expression

\[
Tf(x)=\int K(x-y)f(y)\,dy
\]

is an $H_2$-valued **Bochner integral**. Strong measurability, norm integrability, Bochner–Fubini, and the ability to interchange bounded operators with integrals must be justified. For separable Hilbert targets, weak and strong measurability agree under the usual hypotheses. This is one reason the separability assumption is convenient, even when it is not mathematically essential to every statement.

### Scalarization and the $L^2$ estimate

An operator-valued Fourier transform should not simply be presumed to exist as a norm-convergent integral in $\mathcal B(H_1,H_2)$. Instead, fix $u\in H_1$ and $v\in H_2$ and scalarize:

\[
k_{u,v}(x)=\langle K(x)u,v\rangle.
\]

Suppose these scalar Fourier transforms can be realized compatibly and obey a uniform estimate

\[
|\widehat{k_{u,v}}(\xi)|\le B\|u\|_{H_1}\|v\|_{H_2}
\]

for almost every $\xi$, with a common null set obtained using countable dense subsets. By Riesz representation, the scalar bilinear forms define an operator multiplier $M(\xi)\in\mathcal B(H_1,H_2)$ satisfying

\[
\|M(\xi)\|_{\mathrm{op}}\le B.
\]

A careful truncation and Bochner–Fubini argument identifies this multiplier with the convolution operator. Hilbert-valued Plancherel then gives

\[
\|Tf\|_{L^2(H_2)}\le B\|f\|_{L^2(H_1)}.
\]

This *scalarization* is useful even when the target Hilbert space is infinite-dimensional. It avoids assuming more operator-norm integrability than is really available.

### The derivative estimate is genuinely Banach-valued

Similarly, if $K$ is differentiable into $\mathcal B(H_1,H_2)$ in the Fréchet (operator-norm) sense and

\[
\|DK(x)\|\lesssim |x|^{-n-1},
\]

then for $|h|\le|x|/2$,

\[
K(x-h)-K(x)=-\int_0^1 DK(x-th)[h] \,dt,
\qquad
\|K(x-h)-K(x)\|\lesssim\frac{|h|}{|x|^{n+1}}.
\]

The integral along the segment is an ordinary Bochner integral of a norm-continuous operator-valued function. This supplies the kernel difference estimate required by the vector-valued Calderón–Zygmund argument.

The decisive cancellation still takes place **before taking norms**. For a Hilbert-valued bad piece,

\[
\int_Qb_Q(y)\,dy=0\quad\text{in }H_1,
\]

so the same kernel subtraction gives an equality in $H_2$. Only afterwards do we estimate with $\|K(x-y)-K(x-c_Q)\|_{\mathrm{op}}\|b_Q(y)\|_{H_1}$. Replacing the vector integrand by its norm at the start would destroy the information that makes the proof work.

The scalar integral defining $g(f)^2$ needs no Bochner theory by itself. Bochner integration supplies a rigorous language for the *linear lifted operator*, its convolution, and its cancellation. Hilbert geometry supplies Plancherel, polarization, and the adjoint. The real-variable estimates themselves retain the scalar proof mechanism.

The proof then follows the scalar pattern: $L^2$ boundedness, cancellation of Hilbert-valued bad pieces, weak $(1,1)$, interpolation, and duality. These details matter because the Littlewood–Paley kernel below has a whole function of the scale variable as its value.

## 5. Poisson extensions and the boundary-trace picture

Before defining a continuous square function, there is a second thread in Chapter III worth recovering. The Poisson semigroup

\[
P_t(x)=c_n\frac{t}{(t^2+|x|^2)^{(n+1)/2}},
\qquad \widehat{P_t}(\xi)=e^{-2\pi t|\xi|}
\]

associates to boundary data $f$ the harmonic extension $u(x,t)=P_t*f(x)$ in the upper half-space. It is also an approximate identity.

For $1\le p<\infty$, translation continuity in $L^p$ yields $P_t*f\to f$ strongly in $L^p$. Almost-everywhere convergence is a separate matter: a radial decreasing integrable majorant gives

\[
\sup_{t>0}|P_t*f(x)|\lesssim Mf(x),
\]

and the maximal bound, together with density, gives almost-everywhere boundary recovery. This same distinction between norm convergence and pointwise convergence is important when identifying principal-value singular integrals. Smooth regularization of $Tf$ and convergence of sharp truncations of the singular kernel are related, but not identical, problems; for the latter, a maximal-truncation estimate such as a Cotlar inequality is useful.

The maximal domination has a useful general explanation. If $\Phi(x)=h(|x|)$ is nonnegative, radially decreasing, and integrable, define the positive Stieltjes measure

\[
d\nu(r)=|B(0,1)|r^n\,d[-h(r)],
\qquad \nu((0,\infty))=\|\Phi\|_1.
\]

Then convolution with $\Phi_\varepsilon(x)=\varepsilon^{-n}\Phi(x/\varepsilon)$ is a mixture of ball averages:

\[
(\Phi_\varepsilon*|f|)(x)
=\int_0^\infty\frac{1}{|B(x,\varepsilon r)|}
\int_{B(x,\varepsilon r)}|f(y)|\,dy\,d\nu(r)
\le\|\Phi\|_1Mf(x).
\]

This is the layer-cake representation behind the maximal estimate. It also works for positive measures, with ball mass in place of the inner integral. Poisson regularization therefore belongs to the same averaging framework as Lebesgue differentiation; the shape of the kernel changes, while the control by ball averages persists.

I also found it illuminating to go beyond Stein's immediate needs and complete the upper-half-space $h^p$ trace picture. Define

\[
h^p=\bigl\{u\text{ harmonic in }\mathbb R^{n+1}_+:
\sup_{t>0}\|u(\cdot,t)\|_p<\infty\bigr\}.
\]

The boundary space, and the natural mode of recovery, depend on $p$:

| Range | Boundary representation | Recovery as $t\downarrow0$ |
|---|---|---|
| $p=1$ | $u=P_t*\mu$, $\mu$ a finite complex Borel measure | weak-* in $\mathcal M(\mathbb R^n)=C_0(\mathbb R^n)^*$ |
| $1<p<\infty$ | $u=P_t*f$, $f\in L^p$ | strongly in $L^p$ |
| $p=\infty$ | $u=P_t*f$, $f\in L^\infty$ | weak-* in $\sigma(L^\infty,L^1)$ |

Here the $p=1$ boundary space is all finite measures, rather than just $L^1$. The distinction is visible in $u(x,t)=P_t(x)$: every slice has $L^1$ norm one, but the trace is $\delta_0$. Its pointwise limit is zero for every $x\ne0$, while its weak-* limit as a measure is nonzero. In particular it does not converge strongly in $L^1$ to a boundary function. If the measure is absolutely continuous, $d\mu=f\,dx$ with $f\in L^1$, then strong $L^1$ recovery does hold.

The representation has a short compactness proof, but its order matters. Set $M=\sup_t\|u(\cdot,t)\|_p$. Interior harmonic estimates show that for $a>0$, the shifted function $u(x,t+a)$ is bounded on the closed half-space. Uniqueness of the bounded harmonic extension then gives

\[
u(\cdot,t+a)=P_t*u(\cdot,a).
\]

This establishes the shifted semigroup identity *before* extracting boundary data. Choose $a_j\downarrow0$. Reflexivity produces a weakly convergent subsequence of $u(\cdot,a_j)$ for $1<p<\infty$; weak-* compactness in $\mathcal M=C_0^*$ or $L^\infty=(L^1)^*$ handles the endpoints. For a fixed height $t>a_j$,

\[
u(x,t)=\int P_{t-a_j}(x-y)u(y,a_j)\,dy.
\]

The test kernels converge to $P_t(x-\cdot)$ in $L^{p'}$, in $C_0$ for $p=1$, or in $L^1$ for $p=\infty$. Passing to the limit identifies $u=P_t*f$ or $u=P_t*\mu$. Approximation-to-identity convergence makes the trace unique, so the representation is independent of the chosen subsequence.

Poisson contraction gives one norm inequality; weak lower semicontinuity and boundary recovery give the other. Thus

\[
\|u\|_{h^p}=\|f\|_p\quad(1<p\le\infty),
\qquad \|u\|_{h^1}=\|\mu\|_{\mathrm{TV}}.
\]

For $p=\infty$, weak-* recovery does not generally improve to uniform convergence: discontinuous boundary data already prevent it. For a bounded uniformly continuous datum it does improve to uniform convergence. In the measure case, if $d\mu=f\,dx+d\mu_s$, the Poisson boundary values recover $f$ at Lebesgue-almost every point; they need not detect $\mu_s$ through almost-everywhere numerical limits. Appropriate nontangential limits follow from corresponding maximal estimates and differentiation results.

This gives a broader reason for introducing the Poisson semigroup: its harmonic extension and trace are controlled in precisely the function spaces needed for Littlewood–Paley analysis.

## 6. Continuous Littlewood–Paley theory and Mikhlin's theorem

Let $u(x,t)=P_t*f(x)$. The classical $g$-function is

\[
g(f)(x)=\left(\int_0^\infty t|\nabla_{x,t}u(x,t)|^2\,dt\right)^{1/2}.
\]

There is already a frequency-localization interpretation. Since

\[
\widehat{t^k\partial_t^k(P_t*f)}(\xi)
=(-2\pi t|\xi|)^ke^{-2\pi t|\xi|}\widehat f(\xi),
\]

its multiplier peaks where $t|\xi|$ is of order one (for fixed $k$). As $t$ runs over all positive values, these are *continuous soft frequency annuli*. Plancherel shows why integrating their squared size over $dt/t$ recovers a constant multiple of the energy of $f$.

To obtain $L^p$ estimates, treat $g$ as the norm of a linear Hilbert-valued operator. With

\[
H=L^2((0,\infty),t\,dt;\mathbb C^{n+1}),
\qquad
\mathcal Gf(x)=\{\nabla_{x,t}P_t*f(x)\}_{t>0},
\]

we have $g(f)(x)=\|\mathcal Gf(x)\|_H$. The kernel of $\mathcal G$ takes values in $H$ and has precisely the operator-valued singular-integral structure prepared in the previous section.

For the lifted kernel $K(x)=\{\nabla_{x,t}P_t(x)\}_{t>0}$, direct scaling gives

\[
\|K(x)\|_H\lesssim|x|^{-n},
\qquad \|D_xK(x)\|_H\lesssim|x|^{-n-1}.
\]

For example $|\nabla P_t(x)|\lesssim(t^2+|x|^2)^{-(n+1)/2}$, and integrating its square against $t\,dt$ gives a constant times $|x|^{-2n}$. The derivative estimate follows in the same way with one extra inverse power. Hilbert-valued Plancherel supplies the $L^2$ bound.

One convenient rigorous proof first replaces $P_t$ by $P_{t+\varepsilon}$. The same kernel and $L^2$ bounds hold uniformly in $\varepsilon$. Apply the Hilbert-valued Calderón–Zygmund theorem and then use Fatou's lemma as $\varepsilon\downarrow0$; the shifted integrands need not be monotone. This yields

\[
\|g(f)\|_p\lesssim_p\|f\|_p.
\]

For the reverse inequality, use the vertical-derivative version $g_1$ and the $L^2$ identity. With $\mathcal G_1f=\{\partial_tP_t*f\}_{t>0}$, one has

\[
\mathcal G_1^*\mathcal G_1=\tfrac14 I
\]

under the normalization above. Polarization, Hölder's inequality and $L^p$ duality therefore give

\[
\boxed{\|g(f)\|_p\asymp_p\|f\|_p,\qquad1<p<\infty.}
\]

There is also a complementary PDE-based argument: for a positive harmonic function $u$, the identity

\[
\Delta(u^p)=p(p-1)u^{p-2}|\nabla u|^2
\]

relates square functions to Green identities and maximal bounds. It gives a second interpretation of why the gradients of harmonic extensions control boundary norms; it is not necessary to reduce every such proof to Fourier multipliers from the outset.

### Why introduce $g^*$?

A companion to the vertical $g$-function is the **Lusin area function**. With the cone

\[\Gamma(x)=\{(y,t):|y-x|<t,\ t>0\},\]

set

\[
S(f)(x)=\left(\int_{\Gamma(x)}t^{1-n}|\nabla P_t*f(y)|^2\,dy\,dt\right)^{1/2}.
\]

Its cone averages control the vertical square function locally, and the weighted $g^*$ function below controls this conical area integral (up to dimensional constants, for appropriate parameters). These are three geometrically different ways of measuring the same harmonic extension: on a vertical ray, over a cone, or over the whole upper half-space with a decaying weight.

The Fourier multiplier $T_m$ is nonlocal. It is therefore unrealistic to bound the vertical square function of $T_mf$ solely by a vertical square function of $f$ at the same base point. Stein introduces the wider weighted area function

\[
g_\lambda^*(f)(x)^2
=\int_0^\infty\int_{\mathbb R^n}
\left(\frac{t}{t+|x-y|}\right)^{\lambda n}
 t^{1-n}|\nabla P_t*f(y)|^2\,dy\,dt.
\]

The function takes account of gradients over the entire upper half-space, suppressing distant contributions by a geometric weight. For $1<p<\infty$, its boundedness holds when $\lambda>\max(1,2/p)$:

\[
\|g_\lambda^*(f)\|_p\lesssim\|f\|_p.
\]

The pointwise comparison is $g\lesssim S\lesssim_\lambda g^*_\lambda$. The second inequality follows directly from the weight on a cone; the first uses the mean-value estimate for the harmonic derivatives. Together with the $g^*$ upper bound (choose $\lambda>\max(1,2/p)$), these give $\|S(f)\|_p\asymp\|f\|_p$ for $1<p<\infty$.

The bridge to multipliers can be made quite explicit. Write $U_t=P_t*T_mf$, $u_t=P_t*f$, and choose an integer $N>n/2$. Define

\[
M_t=\mathcal F^{-1}\!\left[
m(\xi)(-2\pi|\xi|)^N e^{-\pi t|\xi|}\right].
\]

The semigroup identity gives

\[
\partial_t^{N+1}U_t
=M_t*\left[(\partial_su_s)\big|_{s=t/2}\right].
\]

Assuming the Mikhlin derivative bounds displayed below, Plancherel and differentiation on the Fourier side give

\[
\|M_t\|_\infty\lesssim B t^{-n-N},
\qquad
\int|z|^{2N}|M_t(z)|^2\,dz\lesssim B^2t^{-n}.
\]

The factor $|\xi|^N$ compensates for derivatives of $m$ near zero; the exponential controls infinity. Split the convolution at $|z|=t$. Cauchy–Schwarz, using the first estimate near zero and the weighted second estimate outside, yields

\[
|\partial_t^{N+1}U_t(x)|^2
\lesssim B^2t^{-n-2N}
\int\left(1+\frac{|z|}{t}\right)^{-2N}
\left|(\partial_su_s)(x-z)\big|_{s=t/2}\right|^2\,dz.
\]

Define $g_r(F)^2=\int_0^\infty t^{2r-1}|\partial_t^rP_t*F|^2dt$. Multiplying by $t^{2N+1}$ and integrating gives

\[
g_{N+1}(T_mf)\lesssim B g^*_{2N/n}(f).
\]

The one-variable Hardy inequality for the successive $t$-derivatives gives $g_1(F)\lesssim_Ng_{N+1}(F)$. Since $2N/n>1$, the $g^*$ estimate applies for every $p\ge2$. The reverse $g_1$ inequality therefore bounds $T_m$ for $p\ge2$; duality, applied to $\overline m$, supplies $1<p<2$. One can begin with smooth frequency-localized inputs and pass by density. This is the mechanism by which symbol regularity becomes an operator bound, without using the later dyadic theorem to prove the earlier multiplier theorem.

A standard convenient statement of the resulting Mikhlin theorem is: if $m\in C^N(\mathbb R^n\setminus\{0\})$, $N>n/2$ an integer, and

\[
\boxed{|\partial^\alpha m(\xi)|\le B|\xi|^{-|\alpha|},
\qquad |\alpha|\le N,}
\]

then

\[
\boxed{\|T_mf\|_p\lesssim_{p,n,N}B\|f\|_p,
\qquad1<p<\infty.}
\]

The deeper Hörmander version replaces pointwise derivative bounds by scale-invariant $L^2$ estimates on annuli. For the elliptic application below, the displayed Mikhlin condition suffices.

## 7. Third estimate: general constant-coefficient elliptic operators

Let

\[
P(D)=\sum_{|\alpha|\le k}a_\alpha D^\alpha
\]

be a constant-coefficient differential operator whose degree-$k$ principal polynomial is elliptic. Its full Fourier symbol is

\[
p(\xi)=\sum_{|\alpha|\le k}a_\alpha(2\pi i\xi)^\alpha.
\]

Ellipticity of the highest-degree part implies $|p(\xi)|\gtrsim|\xi|^k$ for sufficiently large $|\xi|$, although $p$ may have zeros at bounded frequencies. This is why the homogeneous argument of Section 3 cannot be applied verbatim.

Choose $\chi\in C^\infty$ equal to zero near the zero set of $p$ and equal to one outside a sufficiently large ball. For $|\alpha|\le k$, decompose

\[
(2\pi i\xi)^\alpha
=\underbrace{\chi(\xi)\frac{(2\pi i\xi)^\alpha}{p(\xi)}}_{m_\alpha(\xi)}p(\xi)
+\underbrace{(1-\chi(\xi))(2\pi i\xi)^\alpha}_{b_\alpha(\xi)}.
\]

The high-frequency multiplier $m_\alpha$ satisfies Mikhlin's estimates; polynomial differentiation and the elliptic lower bound give $|\partial^\beta m_\alpha(\xi)|\lesssim|\xi|^{-|\beta|}$. The low-frequency multiplier $b_\alpha$ is smooth and compactly supported, so its inverse Fourier transform is Schwartz, hence integrable. Mikhlin's theorem and Young's inequality imply

\[
\begin{aligned}
\|D^\alpha f\|_p
&\le\|T_{m_\alpha}(P(D)f)\|_p+\|T_{b_\alpha}f\|_p\\
&\lesssim\|P(D)f\|_p+\|f\|_p.
\end{aligned}
\]

Summing over $|\alpha|\le k$ yields

\[
\boxed{\|f\|_{W^{k,p}(\mathbb R^n)}
\lesssim\|P(D)f\|_{L^p}+\|f\|_{L^p}.}
\]

The reverse inequality is immediate from the definition of $P(D)$, so

\[
\|f\|_{W^{k,p}}\asymp\|P(D)f\|_p+\|f\|_p.
\]

The same identity proves an actual regularity statement: if $f\in L^p$ and $P(D)f\in L^p$ distributionally, then $f\in W^{k,p}$. To justify this without assuming the desired derivatives, convolve $f$ with a smooth approximate identity. Each mollification lies in $W^{k,p}$, commutes with $P(D)$, and obeys the uniform estimate. Weak compactness of its derivatives identifies the distributional derivatives of $f$ as $L^p$ functions. Consequently the maximal $L^p$ domain of $P(D)$ is exactly $W^{k,p}$. The derivative estimate through $|\alpha|=k$ is stated in Stein's Chapter IV, §7.9. All these statements concern the whole space and constant coefficients. Interior estimates on domains require cutoffs and lower-order error terms; boundary-value estimates and variable coefficients need additional arguments.

This proof, sketched in Stein's Chapter IV, §7.9, is a particularly satisfying conclusion to the PDE thread. The second estimate uses a *homogeneous* symbol and its smoothness on the sphere. The third handles *nonhomogeneous* symbols by splitting frequencies and using a multiplier theorem that is stable under differentiation and rescaling.

## 8. Randomization and a general vector-valued principle

There is another reason to study dyadic Littlewood–Paley theory, beyond its role in proving Mikhlin. It makes a remarkably general use of random signs.

Let $T:L^p(X)\to L^p(X)$ be **any bounded linear operator**, $1<p<\infty$, and let $(f_j)$ be a finite family. If $\varepsilon_j$ are independent Rademacher variables, Khinchine's inequality gives

\[
\left\|\left(\sum_j|Tf_j|^2\right)^{1/2}\right\|_p^p
\asymp_p\mathbb E\left\|\sum_j\varepsilon_jTf_j\right\|_p^p.
\]

Linearity is now decisive:

\[
\begin{aligned}
\mathbb E\left\|\sum_j\varepsilon_jTf_j\right\|_p^p
&=\mathbb E\left\|T\left(\sum_j\varepsilon_jf_j\right)\right\|_p^p\\
&\le\|T\|_{p\to p}^p
\mathbb E\left\|\sum_j\varepsilon_jf_j\right\|_p^p.
\end{aligned}
\]

Applying Khinchine again proves the Marcinkiewicz–Zygmund vector-valued inequality

\[
\boxed{
\left\|\left(\sum_j|Tf_j|^2\right)^{1/2}\right\|_p
\le C_p\|T\|_{p\to p}
\left\|\left(\sum_j|f_j|^2\right)^{1/2}\right\|_p.}
\]

No singular kernel hypothesis is needed. For complex-linear operators one can also use rotationally invariant complex Gaussian variables to obtain the same extension norm. The crucial distinction is that the *same scalar operator* acts coordinatewise. This is not the full generality of an arbitrary operator-valued singular integral kernel as in Section 4.

I find this argument memorable because randomization changes the type of question being asked: a nonlinear-looking $\ell^2$ expression becomes the expectation of a linear combination, on which the original $L^p$ bound is immediately available.

## 9. Soft and hard dyadic Littlewood–Paley decompositions

We can end the four-chapter reading with two discrete square-function estimates. There is no need for my present purposes to continue to the Marcinkiewicz multiplier theorem.

### Soft annular decomposition: a direct Mikhlin application

Choose $\varphi\in C_c^\infty(\mathbb R^n\setminus\{0\})$ with support in an annulus and

\[
\sum_{j\in\mathbb Z}\varphi(2^{-j}\xi)=1\qquad(\xi\ne0).
\]

Let $\widehat{\Delta_jf}(\xi)=\varphi(2^{-j}\xi)\widehat f(\xi)$. For any choices $\varepsilon_j\in\{-1,1\}$, the symbol

\[
m_\varepsilon(\xi)=\sum_j\varepsilon_j\varphi(2^{-j}\xi)
\]

satisfies Mikhlin's bounds uniformly: at any nonzero frequency, only finitely many overlapping annuli contribute, and their natural scale is comparable to $|\xi|$. Thus

\[
\left\|\sum_j\varepsilon_j\Delta_jf\right\|_p\lesssim\|f\|_p.
\]

For finite index sets, Khinchine's inequality and the uniform multiplier bound give the square-function upper estimate. Monotone convergence then handles all $j$.

For the reverse bound, choose a real smooth annular cutoff $\widetilde\varphi$ equal to one on $\operatorname{supp}\varphi$, and let $\widetilde\Delta_j$ be its dilates. These cutoffs also have a square-function upper estimate, by the same randomization argument; they need not themselves form a partition. For Schwartz $f,h$, the reproducing identity is

\[
\langle f,h\rangle
=\sum_j\langle\Delta_jf,\widetilde\Delta_jh\rangle.
\]

Here $\langle f,h\rangle=\int f\overline h$, and the identity follows from $\sum_j\varphi(2^{-j}\xi)\widetilde\varphi(2^{-j}\xi)=1$ away from zero. Cauchy–Schwarz in $j$ and Hölder in $x$ imply

\[
|\langle f,h\rangle|
\lesssim\left\|\left(\sum_j|\Delta_jf|^2\right)^{1/2}\right\|_p
\|h\|_{p'}.
\]

Duality yields the reverse inequality, and density extends it to $L^p$. Thus

\[
\boxed{
\|f\|_p\asymp
\left\|\left(\sum_{j\in\mathbb Z}|\Delta_jf|^2\right)^{1/2}\right\|_p,
\qquad1<p<\infty.}
\]

This is a discrete version of the continuous frequency localization implicit in $t^k\partial_t^kP_t*f$: the annular index $j$ takes the place of the continuous scale $t$.

### Hard dyadic projections: sharp cutoffs need a separate step

In one dimension, let $I_j$ run over the positive and negative dyadic frequency intervals, and write

\[
\widehat{S_{I_j}f}=\mathbf1_{I_j}\widehat f.
\]

The sharp indicators $\mathbf1_{I_j}$ do **not** satisfy Mikhlin's differentiability assumptions. The correct argument is to pass through smooth cutoffs, then use the boundedness of interval projections.

For each $I_j$, choose a uniformly scaled smooth cutoff $\widetilde\varphi_j$ equal to one on $I_j$ and supported in a slightly larger annulus. Then

\[
S_{I_j}f=S_{I_j}\widetilde\Delta_jf.
\]

With our Fourier convention, set

\[
P_+=\tfrac12(I+iH),\qquad M_af(x)=e^{2\pi iax}f(x).
\]

Its symbol is $\mathbf1_{(0,\infty)}$, up to the irrelevant single point zero. Then

\[
S_{(a,b)}=M_aP_+M_{-a}-M_bP_+M_{-b}.
\]

Thus the interval projection is a difference of two modulated half-line projections. Since a half-line projection is a linear combination of the identity and Hilbert transform, its $L^p$ bound is already known. Applying the vector-valued principle of Section 8 to the same half-line projection acting on separately modulated inputs, and observing that modulation preserves pointwise $\ell^2$ norms, yields

\[
\left\|\left(\sum_j|S_{I_j}g_j|^2\right)^{1/2}\right\|_p
\lesssim
\left\|\left(\sum_j|g_j|^2\right)^{1/2}\right\|_p.
\]

Take $g_j=\widetilde\Delta_jf$ and use the soft square-function estimate. For the lower bound, the intervals partition $\mathbb R\setminus\{0\}$ and their $L^2$ projections are mutually orthogonal. Hence

\[
\langle f,h\rangle=\sum_j\langle S_{I_j}f,S_{I_j}h\rangle.
\]

The same Cauchy–Schwarz, Hölder, and $p'$ upper-bound argument gives the reverse estimate. Therefore

\[
\boxed{
\|f\|_p\asymp
\left\|\left(\sum_j|S_{I_j}f|^2\right)^{1/2}\right\|_p.}
\]

In higher dimensions the sharp pieces are dyadic **rectangles**, not radial shells. If $\rho=I_{j_1}\times\cdots\times I_{j_n}$, then

\[
S_\rho=S_{I_{j_1}}^{(1)}\cdots S_{I_{j_n}}^{(n)},
\qquad
\|f\|_p\asymp
\left\|\left(\sum_\rho|S_\rho f|^2\right)^{1/2}\right\|_p.
\]

To iterate the one-dimensional square-function estimate, its Hilbert-valued version is useful: combine the spatial coordinate with the already accumulated $\ell^2$ indices. Khinchine's inequality holds for Hilbert-valued coefficients; the same random-sign argument, the coordinatewise Hilbert-transform bound, and Fubini supply the next coordinate. After $n$ steps this gives Stein's Chapter IV, Theorem 5. It is important not to claim that arbitrary randomized sharp rectangle multipliers satisfy the ordinary isotropic Mikhlin condition. The proof uses one-dimensional projections and tensorization precisely because they need not.

Thus hard dyadic intervals follow from Mikhlin **together with** the Hilbert-transform projection estimate; Mikhlin alone does not apply to their discontinuous symbols. This is a natural stopping point. Continuous Littlewood–Paley theory helped establish Mikhlin's theorem; Mikhlin and randomization now give soft annular square-function estimates; partial sum operators and their vector-valued bounds take us from soft annuli to hard dyadic pieces.

## 10. Closing perspective

I would summarize my reading of the first four chapters by three successive changes of perspective.

First, singular kernels become manageable once one recognizes the interaction between *cancellation* and *regularity*. The kernel may be nonintegrable, but its action on oscillations can still be bounded.

Second, Fourier analysis turns the algebraic nondegeneracy of an elliptic differential operator into a multiplier problem. In the simplest examples the multipliers are compositions of Riesz transforms. For general homogeneous elliptic operators, the angular multiplier–kernel correspondence is best understood through the spectral theory of a compact normal operator on the sphere. For nonhomogeneous operators, the high-/low-frequency split and Mikhlin's theorem take over.

Third, Littlewood–Paley theory teaches us to analyze an operator scale by scale. Its square functions reconcile the local frequency pieces with a global $L^p$ norm; multiplier conditions then control how the operator acts on each piece. This is the beginning of a more flexible viewpoint on regularity, and the reason the next natural topics are Sobolev and Besov spaces, pseudodifferential operators, and eventually nonlinear interactions among frequencies.

There is also a recurring proof strategy that I want to remember. Rather than calculate an object directly, **find a representation in which its structure becomes unavoidable**: symmetries determine the Riesz multiplier; spherical harmonics diagonalize the angular correspondence; Hilbert-valued lifting linearizes the $g$-function; and randomization turns quadratic estimates into uniform bounds for linear operators.

The limitations also point forward. Variable coefficients prevent a single Fourier transform from diagonalizing the entire operator; localization, freezing coefficients, and commutator estimates become necessary. Boundaries bring their own regularity questions. Nonlinear equations require control of interactions among frequency pieces, which is where the dyadic viewpoint begins to do work beyond linear multiplier estimates.

For now, three PDE estimates are enough to see what the first four chapters have accomplished:

\[
\boxed{
\text{singular integrals}
\ \longrightarrow\ \text{Fourier multipliers}
\ \longrightarrow\ \text{elliptic regularity},
}
\]

with Littlewood–Paley theory providing both a deeper multiplier theorem and a frequency-localized language for the next stage of analysis.

---

**Reading references.** E. M. Stein, *Singular Integrals and Differentiability Properties of Functions* (1970), especially Chapter II §§2–5, Chapter III §§1–3, and Chapter IV §§1–5 and §7.9. For the spectral framework on Hilbert spaces and distributions: W. Rudin, *Functional Analysis*; for later dyadic/Sobolev developments: L. Grafakos, *Fundamentals of Fourier Analysis*, and H. Bahouri, J.-Y. Chemin, R. Danchin, *Fourier Analysis and Nonlinear Partial Differential Equations*. The operator-theoretic reconstruction of the angular map and the expanded boundary-trace discussion are additional reading notes, not claims that Stein presents those proofs in the same form.
