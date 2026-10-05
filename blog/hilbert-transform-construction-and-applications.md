# The Hilbert Transform: From Fourier Multipliers to Principal Values

*Reading Knapp through boundary traces, cancellation, and Fourier partial sums*

The Hilbert transform is often introduced by the formula

\[
Hf(x)=\operatorname{p.v.}\frac1\pi
\int_{\mathbb R}\frac{f(x-t)}t\,dt.
\]

This formula already contains several conclusions. For a general \(f\in L^p(\mathbb R)\), why does the principal value exist? Why does its value define another \(L^p\) function? And why should this integral be the same operator as multiplication by \(-i\operatorname{sgn}\xi\) on the Fourier side?

These notes reconstruct the route in Chapters VIII–IX of Knapp's *Basic Real Analysis*. I find the construction easier to understand when each step is attached to the problem it resolves. The resulting theory then answers two further questions: how an \(L^p\) real boundary value determines an analytic Hardy function, and how the Hilbert transform controls Fourier partial sums on the circle.

I use the Fourier convention

\[
\widehat f(\xi)=\int_{\mathbb R}f(x)e^{-2\pi ix\xi}\,dx,
\]

and identify \(\mathbb T\) with \(\mathbb R/(2\pi\mathbb Z)\), equipped with \(d\theta/(2\pi)\). Convolution on \(\mathbb R\) uses Lebesgue measure; convolution on \(\mathbb T\) uses this normalized measure and is written \(*_{\mathbb T}\). Unless stated otherwise, \(1<p<\infty\) and \(p'=p/(p-1)\).

I assume the usual \(L^p\) inequalities, Plancherel's theorem, the Hardy–Littlewood maximal theorem, Lebesgue differentiation, and the standard Marcinkiewicz interpolation theorem. The argument develops the particular decompositions, identities, and limiting procedures needed here. Two technical complements explain the zero-mean error kernel at the end.

## 1. Two destinations for the construction

### 1.1 Completing a real boundary value to an analytic trace

Suppose \(u_0\in L^p(\mathbb R;\mathbb R)\). Its Poisson integral

\[
u(x,y)=P_y*u_0(x),\qquad y>0,
\]

is harmonic in the upper half-plane \(\mathbb H^+=\{x+iy:y>0\}\). To complete it to an analytic function \(F=u+iv\), we need a harmonic conjugate satisfying

\[
u_x=v_y,\qquad u_y=-v_x.
\]

We also want the completion to preserve the size of the boundary data:

\[
\|F\|_{H^p(\mathbb H^+)}
:=\sup_{y>0}\|F(\cdot+iy)\|_{L^p(\mathbb R)}<\infty.
\]

The construction will be

\[
F(x+iy)=P_y*(u_0+iHu_0)(x).
\tag{1.1}
\]

Thus the Hilbert transform supplies the missing imaginary boundary value, and Poisson convolution extends the complete trace into the half-plane. For this to work, \(Hu_0\) must belong to the same \(L^p\) space.

The prescribed datum here is the *real part* of the trace. A complete complex trace \(f_0=u_0+iv_0\) is constrained by analyticity: in this setting it must satisfy \(v_0=Hu_0\). An arbitrary complex-valued \(L^p\) function need not be an analytic trace.

### 1.2 Convergence of Fourier partial sums

The second destination is M. Riesz's theorem:

\[
S_nf\longrightarrow f\quad\text{in }L^p(\mathbb T),
\qquad 1<p<\infty.
\]

For a trigonometric polynomial \(q\), we have \(S_nq=q\) once \(n\) exceeds its degree. Since such polynomials are dense in \(L^p\), the main task is to prove

\[
\sup_n\|S_n\|_{L^p(\mathbb T)\to L^p(\mathbb T)}<\infty.
\tag{1.2}
\]

The convolution kernel is

\[
D_n(t)=\sum_{k=-n}^ne^{ikt}
=\frac{\sin((n+\tfrac12)t)}{\sin(t/2)},
\qquad S_nf=D_n*_{\mathbb T}f.
\]

But \(\|D_n\|_1\asymp\log(n+1)\). Young's inequality therefore gives a bound that grows with \(n\), while (1.2) asks for a uniform bound. We need to retain the oscillation in the numerator instead of estimating the kernel only by its absolute value. Near the origin,

\[
D_n(t)\approx\frac{2\sin((n+\tfrac12)t)}t.
\]

This is the first indication that a modulated \(1/t\) kernel will connect Fourier partial sums to the Hilbert transform.

## 2. The disc model: a multiplier that completes boundary data

The disc Hardy space consists of analytic functions on \(\mathbb D=\{z:|z|<1\}\) with

\[
\|F\|_{H^p(\mathbb D)}
:=\sup_{0<r<1}\|F(re^{i\cdot})\|_{L^p(\mathbb T)}<\infty.
\]

Before working on the line, consider the circle. For \(f\in L^2(\mathbb T)\), define

\[
\widehat{H_{\mathbb T}f}(k)
=-i\operatorname{sgn}(k)\widehat f(k),
\qquad k\in\mathbb Z,
\qquad\operatorname{sgn}(0)=0.
\]

Parseval gives

\[
\|H_{\mathbb T}f\|_2^2
=\|f\|_2^2-|\widehat f(0)|^2.
\]

For \(k>0\), this multiplier sends \(\cos(k\theta)\) to \(\sin(k\theta)\), and \(\sin(k\theta)\) to \(-\cos(k\theta)\). These are exactly the boundary values of the harmonic conjugate pairs arising from \(z^k\).

If \(u_0\in L^2(\mathbb T)\) is real-valued and

\[
f_0=u_0+iH_{\mathbb T}u_0,
\]

then

\[
\widehat f_0(k)=
\begin{cases}
2\widehat u_0(k),&k>0,\\
\widehat u_0(0),&k=0,\\
0,&k<0.
\end{cases}
\tag{2.1}
\]

The disc Poisson kernel is

\[
P_r^{\mathbb T}(t)=\frac{1-r^2}{1-2r\cos t+r^2},
\qquad \widehat{P_r^{\mathbb T}}(k)=r^{|k|}.
\]

Consequently, \(P_r^{\mathbb T}*_{\mathbb T}f_0\) has only nonnegative modes and is the restriction of the analytic function

\[
F(z)=\widehat u_0(0)
+2\sum_{k\ge1}\widehat u_0(k)z^k.
\]

Poisson convolution is a contraction on \(L^2\), so

\[
\sup_{0<r<1}\|F(re^{i\cdot})\|_2
\le\|f_0\|_2.
\]

Moreover, \(F(re^{i\cdot})\to f_0\) in \(L^2\) as \(r\uparrow1\). Thus \(F\in H^2(\mathbb D)\) and \(f_0\) is its boundary trace.

Conversely, if \(F(z)=\sum_{k\ge0}a_kz^k\in H^2(\mathbb D)\), then

\[
\|F(re^{i\cdot})\|_2^2
=\sum_{k\ge0}|a_k|^2r^{2k}.
\]

The uniform bound implies \(\sum_{k\ge0}|a_k|^2<\infty\). These coefficients determine an \(L^2\) trace with no negative modes. We have therefore obtained the correspondence

\[
H^2(\mathbb D)
\longleftrightarrow
\{f_0\in L^2(\mathbb T):\widehat f_0(k)=0\text{ for }k<0\}.
\tag{2.2}
\]

There is one normalization to retain. Prescribing \(\operatorname{Re}f_0=u_0\) leaves an imaginary constant free; the construction above chooses \(\operatorname{Im}F(0)=0\). The zero mode survives on the circle.

For general \(p\), the same trace correspondence will hold, but Parseval no longer supplies the conjugate-function estimate. We will first build the real-line \(L^p\) theory and then return to the disc.

## 3. A real-line operator that is immediately bounded on \(L^2\)

Define

\[
H^{(2)}f=\mathcal F^{-1}
\bigl[-i\operatorname{sgn}(\xi)\widehat f(\xi)\bigr],
\qquad f\in L^2(\mathbb R).
\]

By Plancherel,

\[
\|H^{(2)}f\|_2=\|f\|_2,
\qquad (H^{(2)})^2=-I.
\]

The superscript distinguishes this initial \(L^2\) operator from the truncations \(H_\varepsilon\) introduced below. On the line, the single frequency \(\xi=0\) is a null set; there is no constant \(L^2\) mode analogous to the one on the circle.

This is an instance of the general multiplier construction: an essentially bounded symbol \(m\) defines the bounded \(L^2\) operator \(\mathcal F^{-1}m\mathcal F\). Knapp's Theorem 8.14 proves the converse as well: every bounded \(L^2\) operator commuting with translations has this form.

The circle explains why such a representation is natural. A bounded operator commuting with rotations must preserve each one-dimensional Fourier mode, so it acts by multiplying that mode by a scalar. On \(\mathbb R\), individual exponentials do not belong to \(L^2\), and this basis-vector argument cannot be applied directly. The multiplier structure nevertheless remains valid.

The ease of the \(L^2\) definition does not settle the \(L^p\) problem. An arbitrary bounded symbol need not define a bounded \(L^p\) multiplier. We need additional information about this particular symbol, and Poisson smoothing will reveal it.

## 4. Poisson smoothing reveals a truncated singular kernel

### 4.1 The Poisson and conjugate Poisson kernels

For \(\varepsilon>0\), let

\[
P_\varepsilon(x)=\frac1\pi\frac{\varepsilon}{x^2+\varepsilon^2},
\qquad
Q_\varepsilon(x)=\frac1\pi\frac{x}{x^2+\varepsilon^2}.
\]

Their Fourier transforms satisfy

\[
\widehat P_\varepsilon(\xi)=e^{-2\pi\varepsilon|\xi|},
\qquad
\widehat Q_\varepsilon(\xi)
=-i\operatorname{sgn}(\xi)e^{-2\pi\varepsilon|\xi|}.
\tag{4.1}
\]

Although \(Q_\varepsilon\notin L^1\), it belongs to \(L^2\). Its Fourier transform in (4.1) is initially an \(L^2\) transform, and for \(f\in L^2\) the convolution integral is defined at every \(x\) by Cauchy–Schwarz.

To justify the multiplier formula for \(Q_\varepsilon*f\), one may first approximate \(f\) by \(f_j\in L^1\cap L^2\). Then

\[
\|Q_\varepsilon*f_j-Q_\varepsilon*f\|_\infty
\le\|Q_\varepsilon\|_2\|f_j-f\|_2\to0,
\]

while \(\mathcal F^{-1}(\widehat Q_\varepsilon\widehat f_j)\) converges in \(L^2\), since \(\widehat Q_\varepsilon\) is bounded. Uniqueness of the local limit identifies the convolution with this multiplier output. This is the mechanism behind Basic, Theorem 8.22.

Comparing Fourier symbols now gives

\[
Q_\varepsilon*f=P_\varepsilon*(H^{(2)}f),
\qquad
Q_\varepsilon*f\longrightarrow H^{(2)}f\quad\text{in }L^2.
\tag{4.2}
\]

The second conclusion follows either from the Poisson approximate identity or from dominated convergence on the Fourier side.

The kernels also have an analytic interpretation:

\[
P_y(x)+iQ_y(x)=\frac{i}{\pi(x+iy)}.
\]

Thus their convolutions form a harmonic conjugate pair. The multiplier description and the boundary-conjugation description are beginning to meet.

### 4.2 Separating the singular part from a zero-mean error

Since \(Q_\varepsilon(x)\to1/(\pi x)\) for \(x\ne0\), define

\[
h_\varepsilon(x)=\frac{\mathbf1_{\{|x|\ge\varepsilon\}}}{\pi x},
\qquad
H_\varepsilon f(x)=\frac1\pi
\int_{|t|\ge\varepsilon}\frac{f(x-t)}t\,dt.
\]

Set \(\psi=Q_1-h_1\). Explicitly,

\[
\psi(x)=
\begin{cases}
\dfrac{x}{\pi(1+x^2)},&|x|<1,\\[2mm]
-\dfrac{1}{\pi x(1+x^2)},&|x|\ge1.
\end{cases}
\]

It follows that

\[
\psi\in L^1,\qquad\int_{\mathbb R}\psi=0,
\qquad
Q_\varepsilon=h_\varepsilon+\psi_\varepsilon,
\quad
\psi_\varepsilon(x)=\varepsilon^{-1}\psi(x/\varepsilon).
\tag{4.3}
\]

For \(1\le q<\infty\), a zero-mean \(L^1\) kernel satisfies

\[
\psi_\varepsilon*f\to0\quad\text{in }L^q.
\]

Indeed, subtract \(f(x)\) inside the integral and use continuity of translations in \(L^q\); the calculation is recorded in Technical Complement A. Combining this with (4.2) yields

\[
H_\varepsilon f=Q_\varepsilon*f-\psi_\varepsilon*f
\longrightarrow H^{(2)}f\quad\text{in }L^2.
\tag{4.4}
\]

In particular, the fixed truncation satisfies

\[
\|H_1f\|_2\le(1+\|\psi\|_1)\|f\|_2.
\tag{4.5}
\]

### 4.3 Pointwise definition comes before \(L^p\) boundedness

For fixed \(\varepsilon>0\), the truncated kernel belongs to \(L^{p'}\). Hence

\[
|H_\varepsilon f(x)|
\le\|h_\varepsilon\|_{p'}\|f\|_p,
\qquad f\in L^p.
\tag{4.6}
\]

This defines a bounded, uniformly continuous function. Uniform continuity follows from translation continuity of \(h_\varepsilon\) in \(L^{p'}\). But on an infinite-measure space, \(L^\infty\) membership does not imply \(L^p\) membership. Moreover, \(\|h_\varepsilon\|_{p'}\asymp\varepsilon^{-1/p}\), so (4.6) deteriorates as the truncation disappears.

We can therefore ask a precise new question: when is this already-defined convolution a bounded operator from \(L^p\) to itself?

It suffices to answer the question for \(H_1\). If \(D_\varepsilon f(x)=f(\varepsilon x)\), change of variables gives

\[
H_\varepsilon=D_\varepsilon^{-1}H_1D_\varepsilon,
\qquad
\|D_\varepsilon f\|_p=\varepsilon^{-1/p}\|f\|_p.
\tag{4.7}
\]

The two dilation factors cancel in an operator bound. Scale \(1\) is a convenient representative of all truncation scales.

## 5. CZ decomposition: integrability, localization, and zero mean

Knapp next proves that \(H_1\) is of weak type \((1,1)\):

\[
m\{x:|H_1f(x)|>\lambda\}
\le\frac C\lambda\|f\|_1,
\qquad f\in L^1,\quad\lambda>0.
\tag{5.1}
\]

This controls the distribution of the output. Strong \(L^1\) boundedness is unavailable: for \(f=\mathbf1_{[0,1]}\) and \(x>2\),

\[
H_1f(x)=\frac1\pi\int_0^1\frac{dy}{x-y}
=\frac1\pi\log\frac{x}{x-1}
\sim\frac1{\pi x},
\]

which is not integrable at infinity.

### 5.1 What the decomposition actually supplies

Write the centered maximal function as

\[
Mf(x)=\sup_{r>0}\frac1{2r}
\int_{x-r}^{x+r}|f(t)|\,dt.
\]

For a fixed \(\lambda\), let \(E=\{Mf>\lambda\}\). It is open, and the weak maximal theorem gives \(m(E)\le C\|f\|_1/\lambda\). Decompose it into disjoint bounded intervals \(I_j\). Outside \(E\), differentiation gives \(|f|\le\lambda\) a.e.

If \(I_j=(a,b)\), then \(a\notin E\). The centered interval of radius \(b-a\) about \(a\) contains \(I_j\), so

\[
\frac1{|I_j|}\int_{I_j}|f|\le2\lambda.
\]

Define

\[
f_{I_j}=\frac1{|I_j|}\int_{I_j}f,
\qquad
g=f\mathbf1_{E^c}+\sum_jf_{I_j}\mathbf1_{I_j},
\qquad
b_j=(f-f_{I_j})\mathbf1_{I_j}.
\]

Then \(f=g+b\), where \(b=\sum_jb_j\), and

\[
\|g\|_1\le\|f\|_1,
\qquad \|g\|_\infty\le2\lambda.
\tag{5.2}
\]

Thus the useful property of \(g\) is \(g\in L^1\cap L^\infty\): it belongs to every intermediate \(L^q\), with

\[
\|g\|_q^q\le\|g\|_\infty^{q-1}\|g\|_1.
\]

The available operator estimate is (4.5), so we use

\[
\|g\|_2^2\le2\lambda\|f\|_1.
\]

The useful properties of the other pieces are

\[
\operatorname{supp}b_j\subset I_j,
\qquad \int b_j=0,
\qquad \sum_j\|b_j\|_1\le2\|f\|_1.
\tag{5.3}
\]

These provide localization, zero mean, and a summable total size. Their role is different from the integrability improvement in (5.2).

### 5.2 Cancellation gains one power of distance

First consider \(K(x)=1/(\pi x)\) away from the truncation boundary. If \(c_j\) is the center of \(I_j\), zero mean permits the exact replacement

\[
\int_{I_j}K(x-y)b_j(y)\,dy
=\int_{I_j}[K(x-y)-K(x-c_j)]b_j(y)\,dy.
\]

For \(x\) outside the doubled interval \(I_j^*\),

\[
|K(x-y)-K(x-c_j)|
\le C\frac{|y-c_j|}{|x-c_j|^2}.
\tag{5.4}
\]

The kernel initially decays like distance to the power \(-1\). After subtraction, it decays like distance to the power \(-2\), multiplied by the source scale. Zero mean makes the subtraction cost nothing in the original integral. This is the cancellation mechanism.

The actual kernel \(h_1\) jumps at \(\pm1\), so a derivative estimate cannot be used across those points. What the proof needs is the integrated difference bound

\[
\int_{|x|\ge2r}|h_1(x-a)-h_1(x)|\,dx\le C,
\qquad r>0,\quad |a|\le r.
\tag{5.5}
\]

Where both arguments lie outside the truncation, the integrand has the extra decay in (5.4). Where one argument crosses a cutoff, the integrand is bounded and the crossing region has uniformly bounded length: it lies in \(\{|x|<1\}\) or \(\{|x-a|<1\}\). Where both arguments lie inside, the difference is zero. These observations prove (5.5) with an absolute constant.

Using zero mean with \(h_1\), followed by Fubini and (5.5), gives

\[
\int_{(I_j^*)^c}|H_1b_j(x)|\,dx
\le C\|b_j\|_1.
\tag{5.6}
\]

Thus the output of each localized piece is integrable away from its enlarged support, with a constant independent of the interval size.

### 5.3 Combining the two estimates

For \(g\), Chebyshev and (4.5) imply

\[
m\{|H_1g|>\lambda/2\}
\le\frac4{\lambda^2}\|H_1g\|_2^2
\le C\lambda^{-1}\|f\|_1.
\]

For \(b\), let \(E^*=\bigcup_jI_j^*\). By (5.3) and (5.6),

\[
\int_{(E^*)^c}|H_1b|
\le C\sum_j\|b_j\|_1\le C\|f\|_1,
\qquad
m(E^*)\le C\lambda^{-1}\|f\|_1.
\]

Chebyshev on \((E^*)^c\), together with the measure estimate on \(E^*\), gives the same bound for \(\{|H_1b|>\lambda/2\}\). The sum \(\sum_jH_1b_j\) is legitimate here: \(\sum_j\|b_j\|_1<\infty\) and \(h_1\) is bounded, so the convolution series converges uniformly to \(H_1b\).

Finally,

\[
\{|H_1f|>\lambda\}
\subset\{|H_1g|>\lambda/2\}
\cup\{|H_1b|>\lambda/2\},
\]

which proves (5.1). The nonintegrability of the kernel has been handled by combining an existing strong estimate with localized cancellation.

## 6. Interpolation, duality, and a uniform bound at every scale

### 6.1 From the endpoints to \(1<p\le2\)

The standard Marcinkiewicz theorem says that a sublinear operator on \(L^1+L^2\) of weak type \((1,1)\) and strong type \((2,2)\) is of strong type \((p,p)\) for \(1<p<2\). Applying it to \(H_1\), and retaining the known \(p=2\) estimate, gives

\[
\|H_1f\|_p\le A_p\|f\|_p,
\qquad1<p\le2.
\]

I take this interpolation theorem as known. Its proof is not needed for the remaining construction.

### 6.2 Duality supplies \(p>2\)

Since \(h_1\) is a real odd kernel, the sesquilinear pairing satisfies

\[
\langle H_1f,g\rangle=-\langle f,H_1g\rangle
\]

first for compactly supported simple functions. For \(p>2\), we have \(1<p'<2\), so

\[
|\langle H_1f,g\rangle|
\le\|f\|_p\|H_1g\|_{p'}
\le A_{p'}\|f\|_p\|g\|_{p'}.
\]

Duality yields the desired \(L^p\) estimate and a bounded extension from a dense class. The extension agrees with the original pointwise convolution: if \(f_j\to f\) in \(L^p\), then \(h_1\in L^{p'}\) gives

\[
\|h_1*f_j-h_1*f\|_\infty
\le\|h_1\|_{p'}\|f_j-f\|_p\to0.
\]

This identifies the uniform convolution limit with the \(L^p\) extension. Starting with simple functions also ensures that the adjoint identity uses Fubini only where absolute integrability has been checked. Basic, Lemma 9.22 establishes the corresponding duality result for a general convolution kernel.

### 6.3 Dilation removes the dependence on truncation

Applying (4.7), we obtain

\[
\boxed{\|H_\varepsilon f\|_p\le A_p\|f\|_p,
\qquad\varepsilon>0,\quad1<p<\infty.}
\tag{6.1}
\]

The constant is independent of \(\varepsilon\). This is the estimate needed to let the truncation disappear.

At this point we control \(\sup_\varepsilon\|H_\varepsilon f\|_p\). We have not yet bounded \(\|\sup_\varepsilon|H_\varepsilon f|\|_p\), which requires simultaneous pointwise control over all scales. That stronger conclusion will follow later.

## 7. Constructing the \(L^p\) limit

Uniform boundedness alone does not imply convergence. First take \(f\in C_c^1(\mathbb R)\). For \(0<\varepsilon<\delta\), oddness on the symmetric annulus gives

\[
H_\varepsilon f(x)-H_\delta f(x)
=\frac1\pi\int_{\varepsilon\le|t|<\delta}
\frac{f(x-t)-f(x)}t\,dt.
\]

The fundamental theorem of calculus and Minkowski imply

\[
\|f(\cdot-t)-f\|_p\le|t|\|f'\|_p.
\]

Consequently,

\[
\|H_\varepsilon f-H_\delta f\|_p
\le\frac{2(\delta-\varepsilon)}\pi\|f'\|_p\to0.
\tag{7.1}
\]

For general \(f\in L^p\), choose \(f_j\in C_c^1\) with \(f_j\to f\) in \(L^p\). The uniform estimate yields

\[
\begin{aligned}
\|H_\varepsilon f-H_\delta f\|_p
&\le\|H_\varepsilon(f-f_j)\|_p
+\|H_\varepsilon f_j-H_\delta f_j\|_p
+\|H_\delta(f_j-f)\|_p\\
&\le2A_p\|f-f_j\|_p
+\|H_\varepsilon f_j-H_\delta f_j\|_p.
\end{aligned}
\]

First choose \(j\) so that the approximation error is small, then choose \(\varepsilon,\delta\) small enough for (7.1). This proves the Cauchy property in \(L^p\) and defines

\[
\boxed{Hf=L^p\!\text{-}\!\lim_{\varepsilon\downarrow0}H_\varepsilon f,
\qquad\|Hf\|_p\le A_p\|f\|_p.}
\tag{7.2}
\]

This is the construction in Basic, Theorem 9.23.

The definitions for different exponents are compatible. If \(f\in L^p\cap L^q\), the same truncations converge in both norms. On any bounded interval, both convergences imply convergence in measure, whose limit is unique. Hence the two outputs agree a.e. In particular, the new operator agrees with \(H^{(2)}\) on \(L^p\cap L^2\).

We now have a bounded \(L^p\) operator. We still need to show that its value is the principal-value integral: norm convergence by itself only provides an a.e. convergent subsequence, not convergence of the full truncation family.

## 8. Identifying the principal value: associativity and two limiting topologies

### 8.1 Extending the Poisson identity to general \(L^p\) data

We want to prove

\[
Q_\varepsilon*f=P_\varepsilon*(Hf).
\tag{8.1}
\]

Fix the Poisson height \(\varepsilon>0\), and use a separate parameter \(\eta\downarrow0\) for the Hilbert truncation. Because \(P_\varepsilon\in L^2\cap L^{p'}\), the old theory gives

\[
h_\eta*P_\varepsilon\to H^{(2)}P_\varepsilon=Q_\varepsilon
\quad\text{in }L^2,
\]

while the new theory gives

\[
h_\eta*P_\varepsilon\to HP_\varepsilon
\quad\text{in }L^{p'}.
\]

Compatibility identifies the two limits. We therefore have the stronger, appropriately matched statement

\[
h_\eta*P_\varepsilon\to Q_\varepsilon
\quad\text{in }L^{p'}.
\tag{8.2}
\]

For fixed \(\eta\), associativity gives

\[
P_\varepsilon*(h_\eta*f)
=(P_\varepsilon*h_\eta)*f.
\tag{8.3}
\]

The fact that \(h_\eta\notin L^1\) does not prevent this identity. For every \(x\), the absolute double integral is bounded by

\[
\begin{aligned}
&\int_{\mathbb R}|P_\varepsilon(s)|
\int_{\mathbb R}|h_\eta(t)|\,|f(x-s-t)|\,dt\,ds\\
&\qquad\le
\|P_\varepsilon\|_1\|h_\eta\|_{p'}\|f\|_p<\infty.
\end{aligned}
\]

Thus Fubini justifies (8.3). Now take limits on its two sides in different ways.

On the left, \(H_\eta f\to Hf\) in \(L^p\), and Young's inequality gives

\[
P_\varepsilon*(H_\eta f)
\to P_\varepsilon*(Hf)
\quad\text{in }L^p.
\]

On the right, (8.2) and Hölder give uniform convergence:

\[
\|(P_\varepsilon*h_\eta-Q_\varepsilon)*f\|_\infty
\le\|P_\varepsilon*h_\eta-Q_\varepsilon\|_{p'}\|f\|_p
\to0.
\]

Uniqueness of the limit on bounded intervals proves (8.1) a.e. Both sides have continuous representatives, so the identity holds everywhere for those representatives. It also proves that \(Q_\varepsilon*f\in L^p\), even though \(Q_\varepsilon\notin L^1\).

The roles of the spaces are distinct: \(L^2\) identifies the kernel limit as \(Q_\varepsilon\); \(L^{p'}\) supplies the topology that allows convolution with an arbitrary \(f\in L^p\). An \(L^2\) limit alone would not give the last Hölder estimate for general \(p\).

### 8.2 The error kernel vanishes at almost every point

The explicit \(\psi\) from (4.3) satisfies

\[
|\psi(t)|\le\Phi(t)=\frac C{(1+|t|)^3}.
\]

This is a nonnegative, even, decreasing, integrable majorant. The standard maximal estimate for such kernels gives

\[
\sup_{\varepsilon>0}|\psi_\varepsilon*f(x)|\le CMf(x).
\]

Together with zero mean, the same majorant implies

\[
\psi_\varepsilon*f(x)\to0
\quad\text{at every finite Lebesgue point of }f.
\tag{8.4}
\]

The local part is controlled by the average oscillation of \(f\) around its Lebesgue value; the tail is controlled by the decay of \(\Phi\). Technical Complement B makes this separation explicit. The additional majorant matters: norm convergence of arbitrary zero-mean \(L^1\) dilates is not, by itself, a pointwise convergence theorem.

Since \(Hf\in L^p\), Poisson differentiation also gives

\[
P_\varepsilon*(Hf)(x)\to Hf(x)
\quad\text{a.e.}
\]

Finally,

\[
H_\varepsilon f
=Q_\varepsilon*f-\psi_\varepsilon*f
=P_\varepsilon*(Hf)-\psi_\varepsilon*f,
\]

so

\[
\boxed{Hf(x)=\lim_{\varepsilon\downarrow0}
\frac1\pi\int_{|t|\ge\varepsilon}\frac{f(x-t)}t\,dt
\quad\text{a.e.}}
\tag{8.5}
\]

The right-hand side is now a genuine a.e. principal value, and it belongs to \(L^p\) because it agrees with the operator constructed in (7.2).

The same decomposition gives the stronger maximal estimate

\[
H^*f(x):=\sup_{\varepsilon>0}|H_\varepsilon f(x)|
\le CM(Hf)(x)+CMf(x),
\qquad\|H^*f\|_p\le C_p\|f\|_p.
\]

This is the pointwise control that was not supplied by (6.1). Basic, Chapter IX, Problems 16–19 complete this part of the theory.

## 9. First application: constructing analytic Hardy functions from traces

### 9.1 The construction and its norm control

Take real-valued \(u_0\in L^p(\mathbb R)\) and define

\[
F(x+iy)=P_y*(u_0+iHu_0)(x).
\]

By (8.1), this has the explicit representation

\[
\begin{aligned}
F(x+iy)
&=P_y*u_0(x)+iQ_y*u_0(x)\\
&=\frac{i}{\pi}\int_{\mathbb R}
\frac{u_0(t)}{x+iy-t}\,dt.
\end{aligned}
\tag{9.1}
\]

For fixed \(y>0\), the Cauchy kernel belongs to \(L^{p'}\), so the integral converges absolutely. On compact subsets of \(\mathbb H^+\), its derivative kernels have uniform \(L^{p'}\) bounds. Differentiation under the integral therefore proves that \(F\) is analytic.

Furthermore,

\[
\sup_{y>0}\|F(\cdot+iy)\|_p
\le\|u_0+iHu_0\|_p
\le(1+A_p)\|u_0\|_p.
\]

Poisson approximation gives

\[
F(\cdot+iy)\to u_0+iHu_0
\quad\text{in }L^p\text{ and a.e. as }y\downarrow0.
\tag{9.2}
\]

In particular, the supremum norm equals the trace norm:

\[
\|F\|_{H^p}=\|u_0+iHu_0\|_p.
\]

Here the pointwise approach to the boundary is vertical. Nontangential boundary convergence requires additional discussion and is not developed in these notes.

### 9.2 Why every analytic trace has the required imaginary part

Advanced, Theorem 3.25 first treats the harmonic space: a harmonic function with uniformly bounded horizontal \(L^p\) norms, \(1<p<\infty\), is the Poisson integral of an \(L^p\) boundary function. I write this harmonic space as \(\mathcal H^p\), reserving \(H^p\) for its analytic subspace.

The reverse representation uses bounded slices \(f_j(x)=U(x,1/j)\). A weakly convergent \(L^p\) subsequence gives a candidate \(f_0\); shifted Poisson representation gives

\[
U(x,y+1/j)=P_y*f_j(x).
\]

Testing the weak limit against \(P_y(x-\cdot)\in L^{p'}\) then proves \(U(x,y)=P_y*f_0(x)\). This produces the trace rather than assuming it in advance. Poisson approximation subsequently supplies norm and a.e. recovery.

Now suppose \(F\in H^p(\mathbb H^+)\). By the harmonic representation, write

\[
F(x+iy)=P_y*(u_0+iv_0)(x),
\qquad u_0,v_0\in L^p(\mathbb R;\mathbb R).
\]

Construct \(F_u=P_y*(u_0+iHu_0)\) as above. Both functions are analytic and have the same real part. Their difference is analytic and takes values in the imaginary axis; the Cauchy–Riemann equations imply that it is a constant \(ic\).

Every horizontal slice of \(F-F_u\) belongs to \(L^p(\mathbb R)\). Since \(p<\infty\), this excludes a nonzero constant. Thus \(F=F_u\), and taking traces yields

\[
v_0=Hu_0.
\]

Consequently, Advanced, Chapter III, Problem 13 gives the real-linear correspondence

\[
\boxed{u_0\in L^p(\mathbb R;\mathbb R)
\longleftrightarrow
F=P_y*(u_0+iHu_0)\in H^p(\mathbb H^+).}
\]

For arbitrary complex data, the bounded projection onto analytic traces is

\[
\Pi_+=\frac12(I+iH).
\]

Indeed, \(H^2=-I\) extends from \(L^2\) to \(L^p\) by compatibility and density, so \(\Pi_+^2=\Pi_+\). For an analytic trace \(f_0=u_0+iHu_0\), we have \(Hf_0=-if_0\), hence \(\Pi_+f_0=f_0\).

In \(L^2\), the frequency condition is explicit:

\[
\widehat{u_0+iHu_0}(\xi)
=(1+\operatorname{sgn}\xi)\widehat u_0(\xi).
\]

Negative frequencies vanish. Conversely, if \(\widehat f_0\) vanishes a.e. on \(( -\infty,0)\), then \(\Pi_+f_0=f_0\), and its Poisson extension is analytic. This is the trace characterization in Advanced, Problem 14.

### 9.3 Returning to the disc for general \(p\)

For smooth periodic functions, the circle Hilbert transform has the kernel formula

\[
H_{\mathbb T}f(x)=\operatorname{p.v.}\frac1{2\pi}
\int_{-\pi}^{\pi}f(x-t)\cot(t/2)\,dt.
\]

Evaluating the integral on \(e^{ikx}\) gives the multiplier \(-i\operatorname{sgn}(k)\). To prove its \(L^p\) bound, use

\[
\cot(t/2)=\frac2t+\rho(t),
\qquad \rho\in L^1([-\pi,\pi]).
\]

Let \(f_{\mathrm{per}}\) be the periodic extension of \(f\), and define the real-line function

\[
\widetilde f(y)=\mathbf1_{[-3\pi,3\pi]}(y)f_{\mathrm{per}}(y).
\]

For \(x\in[-\pi,\pi]\), the truncated singular part satisfies

\[
\frac1\pi\int_{\delta\le|t|<\pi}
\frac{f_{\mathrm{per}}(x-t)}t\,dt
=H_\delta\widetilde f(x)-H_\pi\widetilde f(x).
\]

The real-line bound controls this difference uniformly in \(\delta\), and Young controls the \(\rho\) term. Letting \(\delta\downarrow0\) gives a bounded \(L^p(\mathbb T)\) operator, agreeing with the \(L^2\) multiplier on the intersection.

Thus, for real-valued \(u_0\in L^p(\mathbb T)\),

\[
F(re^{i\theta})
=P_r^{\mathbb T}*_{\mathbb T}(u_0+iH_{\mathbb T}u_0)(\theta)
\in H^p(\mathbb D).
\]

More generally, the complete trace space is

\[
\mathcal A^p(\mathbb T)
=\{f_0\in L^p(\mathbb T):\widehat f_0(k)=0\text{ for }k<0\}.
\]

If \(f_0\in\mathcal A^p\), its Poisson extension is analytic: its Fourier series at radius \(r<1\) is the absolutely convergent power series \(\sum_{k\ge0}\widehat f_0(k)z^k\). Contraction and boundary recovery give \(\|F\|_{H^p}=\|f_0\|_p\).

Conversely, for \(F(z)=\sum_{k\ge0}a_kz^k\in H^p(\mathbb D)\), take a weakly convergent subsequence of bounded radial slices as \(r\uparrow1\). Their Fourier coefficients are \(a_kr^k\) for \(k\ge0\), and zero for \(k<0\). Testing the weak limit against each exponential gives a trace \(f_0\in\mathcal A^p\) with coefficients \(a_k\). Its Poisson extension is \(F\), and hence the entire family of radial slices converges in \(L^p\).

The imaginary constant is now allowed because the circle has finite measure. The general completion of a prescribed real trace is

\[
F=P_r^{\mathbb T}*_{\mathbb T}(u_0+iH_{\mathbb T}u_0)+ic,
\qquad c\in\mathbb R.
\]

Correspondingly, the projection retaining nonnegative circle frequencies is

\[
\Pi_{\ge0}^{\mathbb T}
=\frac12(I+iH_{\mathbb T})+\frac12P_0,
\qquad P_0f=\widehat f(0).
\]

The additional \(P_0/2\) restores the full zero mode. This is the precise difference from the real-line projection.

## 10. Second application: Dirichlet kernels and modulated Hilbert integrals

We now follow Basic, Chapter IX, Problems 20–22. This route uses the real-line truncation estimates directly; the circle Hilbert transform from the previous section is not needed for the proof.

### 10.1 Extracting the part that needs cancellation

Set

\[
a_n=n+\frac12,
\qquad \delta_n=\frac1{2n+1},
\]

and, on \([-\pi,\pi]\), define

\[
E_n(t)=\frac{2\sin(a_nt)}t
\mathbf1_{\{\delta_n\le|t|\le\pi\}},
\]

then extend \(E_n\) periodically. We claim

\[
D_n=E_n+r_n,
\qquad \sup_n\|r_n\|_{L^1(\mathbb T)}<\infty.
\tag{10.1}
\]

There are two errors to estimate. Replacing \(1/\sin(t/2)\) by \(2/t\) produces

\[
\sin(a_nt)\left(\frac1{\sin(t/2)}-\frac2t\right).
\]

The parenthesis is \(O(t)\) at zero and integrable on the whole interval, so this error has a uniform \(L^1\) bound. Removing the remaining kernel on \(|t|<\delta_n\) produces an error bounded there by \(2a_n\), and

\[
\int_{|t|<\delta_n}
\left|\frac{2\sin(a_nt)}t\right|\,dt
\le4a_n\delta_n=2.
\]

These estimates prove (10.1). Therefore, if \(T_nf=E_n*_{\mathbb T}f\), it remains to bound \(T_n\) uniformly; Young handles \(r_n*_{\mathbb T}f\).

### 10.2 Writing out the two modulated integrals

Use \(2\sin(a_nt)=(e^{ia_nt}-e^{-ia_nt})/i\). Expanding the normalized convolution gives, for \(x\in[-\pi,\pi]\),

\[
\begin{aligned}
T_nf(x)
={}&\frac{e^{ia_nx}}{2\pi i}
\int_{\delta_n\le|t|\le\pi}
\frac{e^{-ia_n(x-t)}f_{\mathrm{per}}(x-t)}t\,dt\\
&-\frac{e^{-ia_nx}}{2\pi i}
\int_{\delta_n\le|t|\le\pi}
\frac{e^{ia_n(x-t)}f_{\mathrm{per}}(x-t)}t\,dt.
\end{aligned}
\tag{10.2}
\]

Each integral now contains a Hilbert kernel applied to a function multiplied by a phase. Multiplication by \(e^{\pm ia_ny}\) preserves absolute values and hence every \(L^p\) norm.

There is a domain issue to handle: \(a_n\) is a half-integer, so these phases are not \(2\pi\)-periodic. We use them as real-line functions, rather than as periodic multipliers. Extend \(f\) periodically over three periods and cut off as before:

\[
\widetilde f(y)=\mathbf1_{[-3\pi,3\pi]}(y)f_{\mathrm{per}}(y).
\]

For \(x\in[-\pi,\pi]\) and \(|t|\le\pi\), we have \(x-t\in[-2\pi,2\pi]\), so this cutoff does not alter either integral in (10.2).

To identify the first integral with real-line truncations, write its full expression as

\[
\begin{aligned}
&\frac1\pi\int_{\delta_n\le|t|\le\pi}
\frac{e^{-ia_n(x-t)}\widetilde f(x-t)}t\,dt\\
&\quad=\frac1\pi\int_{|t|\ge\delta_n}
\frac{e^{-ia_n(x-t)}\widetilde f(x-t)}t\,dt
-\frac1\pi\int_{|t|\ge\pi}
\frac{e^{-ia_n(x-t)}\widetilde f(x-t)}t\,dt.
\end{aligned}
\tag{10.3}
\]

Define \(g_n^-(y)=e^{-ia_ny}\widetilde f(y)\). The two terms on the last line are exactly \(H_{\delta_n}g_n^-(x)\) and \(H_\pi g_n^-(x)\). Similarly, for \(g_n^+(y)=e^{ia_ny}\widetilde f(y)\), the other integral in (10.2), including its \(1/\pi\) factor, equals \(H_{\delta_n}g_n^+(x)-H_\pi g_n^+(x)\).

Consequently, each difference satisfies

\[
\|H_{\delta_n}g_n^\pm-H_\pi g_n^\pm\|_{L^p(\mathbb R)}
\le2A_p\|g_n^\pm\|_{L^p(\mathbb R)}
=2A_p\|\widetilde f\|_{L^p(\mathbb R)}.
\]

The extension contains exactly three periods, so

\[
\|\widetilde f\|_{L^p(\mathbb R)}^p
=3\int_{-\pi}^{\pi}|f(x)|^p\,dx
=3(2\pi)\|f\|_{L^p(\mathbb T)}^p.
\]

In (10.2), each difference is multiplied by a phase of modulus one and a scalar of modulus \(1/2\). Restricting the real-line estimates to \([-\pi,\pi]\) and dividing by \((2\pi)^{1/p}\) therefore gives

\[
\|T_nf\|_{L^p(\mathbb T)}
\le2A_p3^{1/p}\|f\|_{L^p(\mathbb T)}.
\]

Together with (10.1), this proves

\[
\boxed{\sup_n\|S_nf\|_p\le C_p\|f\|_p.}
\tag{10.4}
\]

The growing \(L^1\) norm of \(D_n\) has not disappeared. Instead, its principal part has been expressed through two oscillatory changes of the input to uniformly bounded Hilbert truncations. The remaining convolution kernels have uniformly bounded \(L^1\) norms.

### 10.3 Uniform boundedness completes the convergence proof

Trigonometric polynomials are dense in \(L^p(\mathbb T)\) for \(p<\infty\). For example, Fejér means are trigonometric polynomials and converge in \(L^p\), since the Fejér kernels form a positive approximate identity.

Choose a trigonometric polynomial \(q\) approximating \(f\). For \(n\) beyond its degree, \(S_nq=q\), and (10.4) gives

\[
\|S_nf-f\|_p
\le\|S_n(f-q)\|_p+\|q-f\|_p
\le(C_p+1)\|f-q\|_p.
\]

The right-hand side can be made arbitrarily small. Hence

\[
\boxed{S_nf\to f\quad\text{in }L^p(\mathbb T),
\qquad1<p<\infty.}
\]

This is the same extension mechanism used to construct \(H\): prove convergence on a dense class, then use a uniform bound to control the approximation error.

The conclusion here is norm convergence. It does not establish a.e. convergence of the full sequence of Fourier partial sums; that is a separate result in Carleson–Hunt theory. Likewise, existence of Hilbert-transform principal values and pointwise convergence of Fourier partial sums are distinct convergence questions.

## 11. The higher-dimensional form: the kernel changes, the architecture persists

Advanced, Chapter III, §5, Theorem 3.26 gives the following direct generalization. Let \(\Omega\in C^1(\mathbb R^N\setminus\{0\})\) be homogeneous of degree zero and have mean zero on the unit sphere:

\[
\Omega(rx)=\Omega(x),\qquad r>0,
\qquad
\int_{S^{N-1}}\Omega(\omega)\,d\sigma(\omega)=0.
\]

Define

\[
T_\varepsilon f(x)
=\int_{|t|\ge\varepsilon}
\frac{\Omega(t)}{|t|^N}f(x-t)\,dt.
\]

For \(1<p<\infty\), the theorem asserts

\[
\sup_{\varepsilon>0}\|T_\varepsilon f\|_p
\le A_{p,N,\Omega}\|f\|_p,
\qquad
Tf=L^p\!\text{-}\!\lim_{\varepsilon\downarrow0}T_\varepsilon f,
\]

and \(\|Tf\|_p\le A_{p,N,\Omega}\|f\|_p\). The theorem first constructs the norm limit. Almost-everywhere convergence is addressed subsequently in Chapter III, Problems 21–24.

For \(N=1\), choosing \(\Omega(t)=\operatorname{sgn}(t)/\pi\) recovers the Hilbert kernel. The Riesz transforms correspond to \(\Omega_j(t)=c_Nt_j/|t|\), giving kernels \(c_Nt_j/|t|^{N+1}\).

The proof retains the same sequence: establish an \(L^2\) bound at one truncation scale, prove weak \((1,1)\) by CZ decomposition, interpolate and use duality, transfer bounds by dilation, and construct the limit by density.

Localization and zero mean still gain one power of distance. For \(K(x)=\Omega(x)/|x|^N\), smoothness and homogeneity give

\[
|K(x-y)-K(x-c)|
\le C\frac{|y-c|}{|x-c|^{N+1}}
\]

when \(y\) remains in a region of scale \(r\) about \(c\) and \(x\) lies sufficiently far away. The resulting radial integral has the same scale-free structure:

\[
\int_r^\infty
\frac r{\rho^{N+1}}\rho^{N-1}\,d\rho
=r\int_r^\infty\rho^{-2}\,d\rho=1.
\]

The new kernel's \(L^2\) estimate must still be proved. In Knapp's argument, spherical mean zero cancels problematic terms in the radial Fourier integral, while angular smoothness supplies the integrated kernel-difference estimate. Once these inputs are established, the interpolation and limiting arguments proceed as they did for the Hilbert transform.

This is what makes the one-dimensional construction useful beyond its particular kernel. It connects a frequency-side operator, harmonic conjugation, spatial cancellation, and norm and pointwise limits in one argument. The two applications expose different parts of that structure: Hardy theory uses the boundary-conjugation identity, while Fourier partial sums use the uniform bounds for modulated singular integrals.

## Technical complements: the zero-mean error kernel

### A. Norm convergence of zero-mean dilates

If \(\psi\in L^1\) and \(\int\psi=0\), then

\[
\psi_\varepsilon*f(x)
=\int\psi(t)[f(x-\varepsilon t)-f(x)]\,dt.
\]

For \(1\le q<\infty\), Minkowski gives

\[
\|\psi_\varepsilon*f\|_q
\le\int|\psi(t)|\,\|f(\cdot-\varepsilon t)-f\|_q\,dt.
\]

For each fixed \(t\), the translation difference tends to zero. It is bounded by \(2\|f\|_q\), so dominated convergence proves the claim. A kernel of integral zero has a vanishing limit; a kernel of integral one gives the usual approximate identity.

### B. Pointwise convergence at Lebesgue points

Let \(x\) be a finite Lebesgue point of \(f\in L^p\). We estimate

\[
\int\psi_\varepsilon(t)[f(x-t)-f(x)]\,dt.
\]

Given \(\eta>0\), choose \(\delta>0\) such that

\[
A(r):=\int_{|t|<r}|f(x-t)-f(x)|\,dt\le2\eta r,
\qquad0<r\le\delta.
\]

Use the majorant \(\Phi(t)=C(1+|t|)^{-3}\), and set \(\phi_\varepsilon(r)=\varepsilon^{-1}\Phi(r/\varepsilon)\). Stieltjes integration by parts gives the local estimate

\[
\begin{aligned}
&\int_{|t|<\delta}\Phi_\varepsilon(t)|f(x-t)-f(x)|\,dt\\
&\quad=\phi_\varepsilon(\delta)A(\delta)
+\int_0^\delta A(r)(-\phi_\varepsilon'(r))\,dr\\
&\quad\le2\eta\left[\delta\phi_\varepsilon(\delta)
+\int_0^\delta r(-\phi_\varepsilon'(r))\,dr\right]\\
&\quad=2\eta\int_0^\delta\phi_\varepsilon(r)\,dr
\le\eta\|\Phi\|_1.
\end{aligned}
\]

For \(|t|\ge\delta\), \(\Phi_\varepsilon(t)\le C\varepsilon^2|t|^{-3}\). The tail is therefore bounded by

\[
C\varepsilon^2\left[
\|f\|_p\bigl\||t|^{-3}\mathbf1_{\{|t|\ge\delta\}}\bigr\|_{p'}
+|f(x)|\int_{|t|\ge\delta}|t|^{-3}\,dt\right].
\]

For fixed \(\delta\), this tends to zero. Letting \(\varepsilon\downarrow0\) and then \(\eta\downarrow0\) proves (8.4). Lebesgue differentiation ensures that these points form a set of full measure.

## References and reading locations

1. Anthony W. Knapp, *Basic Real Analysis*, Digital Second Edition, 2016, published by the author.
   - Chapter VIII, §4, Theorem 8.14, pp. 425–426: the multiplier representation of translation-invariant \(L^2\) operators.
   - Chapter VIII, §7, pp. 435–442: the Hilbert transform, Poisson and conjugate Poisson kernels; Lemma 8.23 and Theorems 8.22, 8.24, and 8.25.
   - Chapter IX, §7, Theorem 9.20, Lemma 9.22, Theorem 9.23, and Lemma 9.24: interpolation, convolution duality, uniform truncation bounds, and the \(L^p\) limit.
   - Chapter IX, Problems 16–19, pp. 486–487: a.e. principal-value identification; Problems 20–22, p. 487: M. Riesz's \(L^p\) convergence theorem for Fourier partial sums.
2. Anthony W. Knapp, *Advanced Real Analysis*, Digital Second Edition, corrected version, 2017, published by the author.
   - Chapter III, §4, Theorem 3.25, pp. 80–83: Poisson representation for harmonic functions with uniform horizontal \(L^p\) bounds.
   - Chapter III, Problems 13–14, p. 101: analytic Hardy traces, the Hilbert transform, and positive Fourier frequencies.
   - Chapter III, §5, Theorem 3.26, pp. 83–92: the homogeneous-kernel Calderón–Zygmund theorem; §6: Riesz transforms and further applications.
   - Chapter III, Problems 21–24: a.e. limits of general CZ truncations.

Page numbers refer to printed page numbers in the books. The disc model and its connection to the line are developed here to explain the boundary-trace picture; the real-line construction and the two subsequent applications are organized around the locations above. The books are available through [Knapp's homepage](https://www.math.stonybrook.edu/~aknapp/).
