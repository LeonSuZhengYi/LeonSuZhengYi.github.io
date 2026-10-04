This is the second half of my chapter-by-chapter notes on Walter Rudin's *Real and Complex Analysis*, continuing [Chapters 1–9](reading-big-rudin-chapters-1-9.html). Chapters 10–17 develop complex and harmonic analysis; Chapters 18–20 return to Banach algebras, Fourier analysis, and approximation. I have added notation, formulas, and a few qualifications where the precise hypotheses matter.

---

## Chapter 10 — Elementary Theory of Analytic Functions

Rudin covers in roughly thirty pages much of the material that a conventional introductory complex-analysis text develops over several chapters. The compression is not merely stylistic. He keeps exactly the tools that will later support harmonic functions, Runge approximation, conformal mapping, Hardy spaces, and analytic continuation.

### 1. Complex differentiability as a rigid first-order system

If a complex-valued function \(f=u+iv\) is regarded as a map from \(\mathbb R^2\) to \(\mathbb R^2\), complex differentiability is much stronger than real differentiability. The Cauchy–Riemann equations can be written compactly as

\[
\bar\partial f
=
\frac12\left(\frac{\partial f}{\partial x}
+i\frac{\partial f}{\partial y}\right)
=0.
\]

This is the first sign of the rigidity that dominates the rest of complex analysis. A first-order PDE forces not only smoothness but, after the Cauchy formula is established, a convergent power-series expansion.

There is a useful modern viewpoint beyond Rudin's proof. In the sense of distributions,

\[
\bar\partial\!\left(\frac1{\pi z}\right)=\delta_0.
\]

Convolving this fundamental solution with \(\bar\partial f\) leads to the Cauchy–Pompeiu formula, just as the fundamental solution of the Laplacian leads to Green and Poisson representation formulas. I regard this as an illuminating reconstruction of the Cauchy formula, not as the route Rudin follows in this chapter.

Rudin's own preliminary integral tool is the Cauchy transform from Theorem 10.7: integrating kernels of the form \((\varphi(\zeta)-z)^{-1}\) against a finite complex measure produces a function that is holomorphic off \(\varphi(X)\). This measure-theoretic construction is used repeatedly later in the book.

### 2. From local Cauchy theory to analytic rigidity

Rudin's route is

\[
\text{Goursat's lemma}
\Longrightarrow
\text{local Cauchy theorem}
\Longrightarrow
\text{local Cauchy formula}
\Longrightarrow
\text{power-series expansion}.
\]

For a circle \(\Gamma\) surrounding \(a\),

\[
f^{(n)}(a)
=
\frac{n!}{2\pi i}
\int_\Gamma\frac{f(z)}{(z-a)^{n+1}}\,dz.
\]

This one representation formula yields smoothness, Cauchy estimates, uniqueness from Taylor data, isolated zeros, Liouville's theorem, the fundamental theorem of algebra, the maximum-modulus principle, and the open-mapping theorem. The logical economy is striking: integration produces a representation, and the representation produces rigidity.

The local normal form is especially useful. If \(f(z)-f(a)\) has a zero of order \(m\) at \(a\), then locally

\[
f(z)-f(a)=(z-a)^m g(z),
\qquad g(a)\ne0.
\]

Thus a nonconstant holomorphic map locally looks like \(z\mapsto z^m\), followed by an invertible holomorphic change of coordinate. The open-mapping theorem and the local behavior of zeros are two aspects of the same statement.

### 3. The function space \(H(\Omega)\)

The space of holomorphic functions on a region \(\Omega\), equipped with locally uniform convergence, is a Fréchet space. If

\[
K_1\subset K_2\subset\cdots,
\qquad
\bigcup_n K_n=\Omega,
\]

is a compact exhaustion, the seminorms

\[
p_n(f)=\sup_{z\in K_n}|f(z)|
\]

generate the compact-open topology. A convenient complete metric is, for example,

\[
d(f,g)=\sum_{n=1}^\infty 2^{-n}
\frac{p_n(f-g)}{1+p_n(f-g)}.
\]

The essential fact is that locally uniform limits preserve holomorphicity. This topology is therefore weak enough to provide compactness through normal-family arguments, but strong enough to preserve the analytic structure. It will become the natural setting for Runge approximation and the Riemann mapping theorem.

### 4. Global Cauchy theory and winding number

The most technical part of the chapter is the global Cauchy theorem. Rudin compresses the geometry of a contour into its index

\[
\operatorname{Ind}_\Gamma(a)
=
\frac1{2\pi i}\int_\Gamma\frac{dz}{z-a}.
\]

If \(\Gamma\) is a cycle in \(\Omega\) and

\[
\operatorname{Ind}_\Gamma(a)=0
\qquad(a\notin\Omega),
\]

then for \(f\in H(\Omega)\),

\[
\int_\Gamma f(z)\,dz=0,
\qquad
\frac1{2\pi i}\int_\Gamma
\frac{f(z)}{z-w}\,dz
=
\operatorname{Ind}_\Gamma(w)f(w).
\]

This is stronger and cleaner than tying the theorem to the boundary of one special domain. The topology of the path is recorded by an integer-valued function, and the analytic statement depends only on that data.

Rudin then develops the usual residue calculus. Besides its role inside complex analysis, this becomes a practical tool for evaluating real integrals and Fourier transforms.

---

## Chapter 11 — Harmonic Functions

This chapter develops harmonic functions in the unit disc and the Poisson integral. Its central theme is a two-way passage:

\[
\text{boundary data}
\longrightarrow
\text{harmonic extension}
\longrightarrow
\text{boundary recovery}.
\]

### 1. Poisson extension and local structure

For \(0\le r<1\), the Poisson kernel is

\[
P_r(e^{it})
=
\frac{1-r^2}{1-2r\cos t+r^2}.
\]

For boundary data \(f\), its Poisson extension is

\[
P[f](re^{i\theta})
=
\frac1{2\pi}
\int_{-\pi}^{\pi}
P_r(e^{i(\theta-t)})f(e^{it})\,dt.
\]

For \(f\in C(\mathbb T)\), this is the unique harmonic function on the disc that extends continuously to \(f\) on the closed disc. Locally, every real harmonic function is the real part of a holomorphic function; a complex harmonic function is locally a sum of a holomorphic and an antiholomorphic function.

As an operator from \(C(\mathbb T)\) to \(C(\overline{\mathbb D})\), Poisson extension preserves the supremum norm, while restriction to any fixed interior circle is a contraction. These are the norm-control statements behind the later converse question: when do uniformly bounded interior sections come from boundary data?

The Poisson operators also form a semigroup:

\[
P_r*P_s=P_{rs}.
\]

Rudin does not emphasize this formulation here, but it clarifies why the radial parameter behaves like an evolution variable. Under the change \(r=e^{-t}\), the family becomes a genuine additive semigroup.

### 2. Approximate identities and different modes of recovery

The family \(P_r\) is a positive approximate identity as \(r\uparrow1\). Hence

\[
\|P_r*f-f\|_p\longrightarrow0
\qquad(1\le p<\infty),
\]

and the convergence is uniform when \(f\) is continuous. For arbitrary \(L^\infty\) data, however, one should not expect convergence in the \(L^\infty\)-norm; almost-everywhere recovery at Lebesgue points is the appropriate statement.

Rudin proves the stronger geometric result of **nontangential** recovery. Instead of approaching \(e^{i\theta}\) only along the radius, one may approach inside a fixed Stolz angle. If \(u=P[f]\), then

\[
u(z)\longrightarrow f(e^{i\theta})
\]

at every Lebesgue point of \(f\), as \(z\to e^{i\theta}\) nontangentially.

### 3. Why the maximal function appears

The mechanism is already the Hardy–Littlewood mechanism of classical harmonic analysis. For a positive radial decreasing kernel, layer-cake decomposition writes the convolution as a weighted average of local averages. This leads to a pointwise bound of the form

\[
N_\alpha(P[f])(e^{i\theta})
\le C_\alpha Mf(e^{i\theta}),
\]

where \(N_\alpha\) is the nontangential maximal function and \(M\) is the Hardy–Littlewood maximal operator.

For a finite measure \(\mu\), \(N_\alpha(P[d\mu])\) satisfies a weak-type \((1,1)\) estimate; for \(f\in L^p\), \(p>1\), it satisfies a strong \(L^p\) estimate. This is what turns an approximation-of-the-identity statement into an almost-everywhere boundary theorem.

The near–far split in Rudin's proof is worth remembering. Near the boundary point, local mass is controlled by the density hypothesis and a maximal estimate; far from the point, the Poisson kernel tends uniformly to zero. The two regions are small for completely different reasons.

### 4. Representation from uniform radial bounds

The converse problem is subtler: when is a harmonic function itself the Poisson integral of boundary data? Let

\[
M_p(r,u)
=
\left(\frac1{2\pi}\int_{-\pi}^{\pi}
|u(re^{i\theta})|^p\,d\theta\right)^{1/p}.
\]

If \(\sup_{r<1}M_p(r,u)<\infty\), then the answer depends on \(p\):

- for \(p=1\), one obtains a finite complex Borel measure \(\mu\) with \(u=P[d\mu]\);
- for \(1<p<\infty\), one obtains \(f\in L^p(\mathbb T)\) with \(u=P[f]\);
- the \(p=\infty\) case corresponds to bounded boundary data in the weak-* sense.

The \(p=1\) distinction is essential. A uniformly \(L^1\)-bounded family of boundary sections need not converge to an \(L^1\)-function; concentration can leave only a measure.

### 5. Dirichlet, Hardy, and Bergman spaces

For holomorphic \(f(z)=\sum_{n\ge0}a_nz^n\), three natural Hilbert spaces satisfy

\[
\mathcal D\subset H^2\subset A^2.
\]

Their coefficient norms are, up to conventional constants,

\[
\|f\|_{H^2}^2=\sum_{n\ge0}|a_n|^2,
\qquad
\|f\|_{A^2}^2=\sum_{n\ge0}\frac{|a_n|^2}{n+1},
\]

and

\[
\|f\|_{\mathcal D}^2
\asymp
|a_0|^2+\sum_{n\ge1}n|a_n|^2.
\]

The embeddings express a hierarchy: control of derivatives implies control of boundary means, which implies area integrability.

The Bergman space also has an operator-theoretic interpretation: it is the range of the orthogonal projection from \(L^2(\mathbb D)\) onto its closed subspace of holomorphic \(L^2\)-functions. The Bergman projection therefore gives the best holomorphic \(L^2\)-approximation.

---

## Chapter 12 — The Maximum Modulus Principle

This chapter studies how the maximum-modulus principle produces quantitative estimates, especially on unbounded domains and in interpolation theory. Locally, the principle can itself be viewed through the growth of the \(L^2\)-means of holomorphic functions on circles.

### 1. Schwarz, Schwarz–Pick, and equality

Schwarz's lemma says that if \(f:\mathbb D\to\mathbb D\) is holomorphic and \(f(0)=0\), then

\[
|f(z)|\le|z|,
\qquad
|f'(0)|\le1.
\]

Equality at a nonzero point, or in the derivative at zero, forces \(f\) to be a rotation. Conjugating by disc automorphisms gives Schwarz–Pick:

\[
\frac{|f'(a)|}{1-|f(a)|^2}
\le
\frac1{1-|a|^2},
\]

or equivalently

\[
\frac{(1-|a|^2)|f'(a)|}{1-|f(a)|^2}\le1.
\]

Equality at one point holds exactly for disc automorphisms. Thus “maximizing the derivative” characterizes biholomorphicity only after fixing the image \(f(a)\), or after using the invariant expression above. This invariant form will motivate the extremal argument in the Riemann mapping theorem.

### 2. Phragmén–Lindelöf as a damping method

On an unbounded domain, boundary control alone does not let us apply the ordinary maximum principle directly. The Phragmén–Lindelöf idea is to multiply by a small holomorphic damping factor, apply the maximum principle on bounded truncations, and then remove the damping.

The method separates two inputs:

- a boundary bound;
- an interior growth restriction that prevents the function from escaping at infinity.

This is a recurring pattern in analysis: a qualitative rigidity principle becomes quantitative after the admissible growth class is specified.

### 3. Three-lines and Hausdorff–Young

If \(F\) is holomorphic in the strip \(0<\Re z<1\), continuous and bounded on its closure, and

\[
|F(it)|\le M_0,
\qquad
|F(1+it)|\le M_1,
\]

then Hadamard's three-lines theorem gives

\[
|F(\theta+it)|
\le
M_0^{1-\theta}M_1^\theta,
\qquad 0<\theta<1.
\]

Rudin uses the three-lines theorem directly to prove the Hausdorff–Young theorem for the Fourier coefficient map. This argument is an instance of the more general Riesz–Thorin complex interpolation principle, but Rudin does not separately state and prove the general Riesz–Thorin theorem here. The proof architecture is

\[
\text{dualize}
\longrightarrow
\text{complexify the pairing}
\longrightarrow
\text{apply three-lines}
\longrightarrow
\text{extend by density}.
\]

The maximum-modulus principle is therefore not only a theorem about one holomorphic function; it becomes a tool for estimating linear operators between \(L^p\)-spaces.

### 4. Rado's theorem and removable exceptional sets

Rado's theorem says that if \(f\) is continuous on a region and holomorphic wherever \(f\ne0\), then \(f\) is holomorphic everywhere. The zero set is, in this sense, a removable exceptional set.

It is tempting to compare this with Schwarz reflection: both recover holomorphicity across a special set from extra structure. But the mechanisms differ. Rado uses continuity, the algebraic role of the zero set, and a maximum-principle argument; reflection uses symmetry and real boundary values. The analogy is structural rather than literal.

---

## Chapter 13 — Approximations by Rational Functions

On the surface this chapter proves Runge's theorem and its consequences. Structurally, it relates four kinds of data attached to a plane region \(\Omega\):

\[
\boxed{
\text{topology of }\Omega
\longleftrightarrow
\text{contour integrals in }H(\Omega)
\longleftrightarrow
\text{approximation in }H(\Omega)
\longleftrightarrow
\text{algebraic closure properties of }H(\Omega).
}
\]

### 1. Topology-aware exhaustion and rational functions

Rudin first adjoins the point at infinity, identifying the one-point compactification of the plane with the Riemann sphere \(S^2\). Rational functions are precisely the meromorphic functions on \(S^2\).

He then constructs compact exhaustions of a region that do not create artificial holes. This matters because allowed poles must be chosen from the actual components of the complement. The geometry of the complement controls the approximation class.

### 2. Runge's theorem through duality

Let \(K\subset\Omega\) be compact, and let \(M(K)\) be the space generated by rational functions whose poles are chosen in the relevant components of \(S^2\setminus K\). To prove that \(f\in H(\Omega)\) lies in the uniform closure of \(M(K)\), Hahn–Banach reduces the problem to annihilating functionals:

\[
\Lambda|_{M(K)}=0
\quad\Longrightarrow\quad
\Lambda(f)=0.
\]

Riesz represents \(\Lambda\) by a measure \(\mu\) on \(K\). One then studies its Cauchy transform

\[
\widehat\mu(z)
=
\int_K\frac{d\mu(\zeta)}{\zeta-z},
\qquad z\notin K.
\]

The permitted poles force \(\widehat\mu\) to vanish on the relevant components of the complement. Fubini and the Cauchy formula then imply \(\Lambda(f)=0\).

This is one of Rudin's most characteristic proofs:

\[
\text{approximation}
\to
\text{annihilator}
\to
\text{representing measure}
\to
\text{holomorphic transform}
\to
\text{analytic uniqueness}.
\]

### 3. Mittag–Leffler as tail repair

Mittag–Leffler asks for a meromorphic function with prescribed principal parts at a discrete set of poles. The naive sum of principal parts need not converge. Runge approximation supplies correcting holomorphic terms so that the tails become summable on a compact exhaustion while each prescribed principal part is unchanged.

This is the same constructive philosophy that will reappear in Weierstrass products:

\[
\boxed{
\text{prescribe local data}
+
\text{modify the tails}
=
\text{obtain a global analytic object}.
}
\]

### 4. Nine faces of simple connectivity

Rudin's Theorem 13.11 is one of the conceptual centers of the book. For a plane region \(\Omega\), the following conditions are equivalent:

- \(\Omega\) is simply connected, equivalently homeomorphic to the disc;
- \(S^2\setminus\Omega\) is connected;
- every closed path in \(\Omega\) has zero index around every point outside \(\Omega\);
- every \(f\in H(\Omega)\) is locally uniformly approximable by polynomials;
- every closed contour integral of a holomorphic function vanishes;
- every holomorphic function has a primitive;
- every nonvanishing holomorphic function has a holomorphic logarithm;
- every nonvanishing holomorphic function has a holomorphic square root.

The nonvanishing condition in the last two statements is essential. In algebraic notation it is the assumption

\[
f,\frac1f\in H(\Omega).
\]

The final implication—from closure under holomorphic square roots back to the disc model—uses the Riemann mapping theorem, formally proved as Theorem 14.8. I place its proof here because, in my reading, it closes the equivalence cycle of Chapter 13.

### 5. Closing the loop with the Riemann mapping theorem

Let \(\Omega\ne\mathbb C\) be simply connected and choose \(z_0\in\Omega\). We want to construct a biholomorphic map from \(\Omega\) onto \(\mathbb D\). Chapter 12 suggests an extremal characterization: after normalizing \(f(z_0)=0\), the desired map should maximize \(|f'(z_0)|\). Geometrically, \(|f'(z_0)|^2\) is the area Jacobian, so a surjective map should be as locally “expanded” as possible.

Consider the family \(\mathcal F\) of injective holomorphic maps \(f:\Omega\to\mathbb D\) with \(f(z_0)=0\). Rudin proves the following ingredients.

1. The square-root property produces at least one member of \(\mathcal F\).
2. By Montel's theorem, every sequence in \(\mathcal F\) has a locally uniformly convergent subsequence.
3. If the limiting derivative at \(z_0\) is nonzero, the limit remains injective; Rouché's theorem is used here.
4. If \(f\in\mathcal F\) is not onto, the square-root construction produces \(g\in\mathcal F\) with

   \[
   |g'(z_0)|>|f'(z_0)|.
   \]

Now take a sequence approaching

\[
\sup_{f\in\mathcal F}|f'(z_0)|.
\]

Montel compactness and the third step produce an extremizer \(h\in\mathcal F\). The fourth step forces \(h\) to be onto. This is very close in spirit to a PDE-style direct method:

\[
\text{extremizing sequence}
+
\text{compactness}
+
\text{closure of the admissible class}
+
\text{strict improvement}
\Longrightarrow
\text{the desired map}.
\]

---

## Chapter 14 — Conformal Mapping

This chapter studies injective holomorphic functions. Injectivity is a global geometric condition, but it forces strong local and quantitative consequences.

### 1. Area estimates and the \(a_2\)-theorem

For a univalent function outside the unit disc with expansion

\[
g(z)=z+b_0+\sum_{n=1}^\infty b_nz^{-n},
\]

the area theorem yields

\[
\sum_{n=1}^\infty n|b_n|^2\le1.
\]

Through a transformation of a normalized univalent function

\[
f(z)=z+a_2z^2+a_3z^3+\cdots,
\]

this gives Bieberbach's estimate

\[
|a_2|\le2.
\]

It is worth being precise about terminology: Rudin proves the \(a_2\) case. The full Bieberbach conjecture \(|a_n|\le n\) was proved much later by de Branges.

### 2. Boundary behavior

For a conformal map \(f:\mathbb D\to\Omega\), the possibility of extending \(f\) continuously and injectively to the boundary is controlled by the topology of \(\partial\Omega\). In the Jordan-domain setting, the Carathéodory theorem gives a homeomorphism

\[
f:\overline{\mathbb D}\longrightarrow\overline\Omega.
\]

This explains a useful rigidity phenomenon. A general \(H^\infty\)-function has only an almost-everywhere \(L^\infty\) boundary trace. Injectivity plus a Jordan boundary upgrades that trace to a continuous boundary parametrization.

Without injectivity, continuity on the closed disc is characterized by the disc algebra

\[
A(\mathbb D)
=
C(\overline{\mathbb D})\cap H(\mathbb D),
\]

which is exactly the uniform closure of the polynomials on \(\overline{\mathbb D}\).

### 3. Annuli and conformal modulus

The simplest multiply connected domains already show that conformal equivalence is much more rigid than topological equivalence. Two annuli

\[
A(r,R)=\{z:r<|z|<R\}
\]

are conformally equivalent precisely when their moduli agree, up to exchanging the two boundary components:

\[
\log\frac Rr
=
\log\frac{R'}{r'}.
\]

Every annulus is topologically a cylinder, but its conformal modulus records quantitative geometry that topology forgets.

---

## Chapter 15 — Zeros of Holomorphic Functions

The first half of this chapter shows how freely zeros and poles can be prescribed. The second half shows that once growth or norm constraints are imposed, zeros become quantitatively restricted.

### 1. Infinite products

An infinite product is controlled by an infinite series. Schematically, if

\[
\sum_n|u_n(z)|
\]

converges locally uniformly, then

\[
\prod_n(1+u_n(z))
\]

converges locally uniformly away from forced zeros. The basic design problem is to make each tail rapidly approach (1).

Weierstrass elementary factors

\[
E_p(z)
=(1-z)\exp\left(z+\frac{z^2}{2}+\cdots+\frac{z^p}{p}\right)
\]

cancel the first terms of the logarithmic expansion and make distant factors summable.

### 2. Weierstrass, Mittag–Leffler, and interpolation

For any discrete set in a region—no accumulation point inside the region—and prescribed finite multiplicities, one can construct a holomorphic function having exactly those zeros. Thus “almost arbitrary zero set” still means a **discrete divisor**.

The constructive unity is more important than the separate theorem names:

- Mittag–Leffler prescribes principal parts and repairs an additive series;
- Weierstrass prescribes zeros and repairs a multiplicative product;
- analytic interpolation prescribes jets and repairs a sequence of local approximants.

In all three cases, local data are easy to write down; the difficulty is changing the tail without disturbing the data already fixed.

### 3. Jensen's formula: growth controls zero density

For \(f\in H(\mathbb D)\), \(f(0)\ne0\), with zeros \(a_k\) in \(|z|<r\), Jensen's formula is

\[
\log|f(0)|
+
\sum_{|a_k|<r}\log\frac r{|a_k|}
=
\frac1{2\pi}\int_0^{2\pi}
\log|f(re^{i\theta})|\,d\theta.
\]

The left side counts zeros with a logarithmic weight; the right side measures boundary growth. This is the quantitative principle behind the second half of the chapter:

\[
\boxed{\text{analytic growth bounds the density of zeros}.}
\]

Potential theory interprets this through

\[
\Delta\log|f|
=
2\pi\sum_k m_k\delta_{a_k}
\]

in the sense of distributions.

### 4. Blaschke products

The zero sets of bounded holomorphic functions in the disc satisfy the Blaschke condition

\[
\sum_k(1-|a_k|)<\infty.
\]

The corresponding product

\[
B(z)
=
\prod_k
\frac{|a_k|}{a_k}
\frac{a_k-z}{1-\overline{a_k}z}
\]

for nonzero zeros \(a_k\), with a factor \(z^m\) for a zero of order \(m\) at the origin, is bounded and has boundary modulus \(1\) almost everywhere. It records the zeros without changing the boundary magnitude, which is why it becomes the zero factor in the canonical factorization of \(H^p\)-functions.

For a proper simply connected region, a Riemann map transfers the same idea from the disc and gives the corresponding Blaschke condition for zeros of bounded holomorphic functions on that region.

### 5. Complexification and Müntz–Szász

Rudin ends with a real approximation theorem proved by complex methods. The Müntz–Szász problem asks when monomials \(x^{\lambda_n}\) span a dense subspace of \(C[0,1]\). For \(0=\lambda_0<\lambda_1<\cdots\), the classical condition is

\[
\sum_{n=1}^\infty\frac1{\lambda_n}=\infty.
\]

Hahn–Banach turns failure of density into an annihilating measure. A Mellin transform converts the moments into zeros of a holomorphic function in a half-plane. Blaschke's theorem then translates zero density back into the Müntz condition.

The general strategy is

\[
\text{real approximation}
\to
\text{annihilator or orthogonal complement}
\to
\text{holomorphic transform}
\to
\text{zero-set rigidity}.
\]

For \(g\in L^2(0,\infty)\), its Laplace transform

\[
F(z)=\int_0^\infty g(t)e^{-zt}\,dt,
\qquad \Re z>0,
\]

naturally belongs to the Hardy space \(H^2\) of the half-plane, not in general to \(H^\infty\). Indeed,

\[
|F(z)|
\le
\frac{\|g\|_2}{\sqrt{2\Re z}},
\]

so the pointwise bound degenerates as the boundary is approached.

---

## Chapter 16 — Analytic Continuation

This chapter connects local power series, continuation along paths, the topology of the domain, and the geometry of punctured spheres.

### 1. Singular boundary points and natural boundaries

A power series has at least one singular point on its circle of convergence. Some points of the circle may still permit analytic continuation: \(1/(1-z)\), for example, extends across every point of the unit circle except \(1\).

A circle is a **natural boundary** when no point of it permits analytic continuation—equivalently, every boundary point is singular for the represented germ. Rudin also discusses Hadamard's gap theorem.

This shows a particularly strong form of analytic rigidity: excellent behavior inside the disc, or even substantial boundary regularity, does not by itself guarantee continuation through any boundary point.

### 2. Germs, paths, and monodromy

A global function \(f\in H(\Omega)\) determines a germ \([f]_a\) at every point \(a\in\Omega\). These local germs are compatible on overlaps, and along every path they continue as pieces of the same global function. So the passage

\[
\text{global holomorphic function}
\longrightarrow
\text{compatible local germs}
\]

is automatic.

The converse is the real issue. Start with one germ at \(a_0\in\Omega\), and assume that it can be analytically continued along every path in \(\Omega\). On a merely connected region, continuation around a loop may return a different branch, as with \(\log z\) or \(\sqrt z\) on \(\mathbb C\setminus\{0\}\). If \(\Omega\) is simply connected, the monodromy theorem says that the continuation is path-independent and therefore grows into a unique global function \(f\in H(\Omega)\) whose germ at \(a_0\) is the one we started with.

This adds another equivalent viewpoint to the picture from Chapter 13:

\[
\text{simple connectivity}
\Longleftrightarrow
\text{absence of monodromy}
\Longleftrightarrow
\text{every continuable germ grows into a unique global function}.
\]

Thus the relationship is genuinely two-way: a global function stores a germ at every point, while a continuable germ on a simply connected region determines one global function uniquely.

### 3. Picard and punctured spheres

Little Picard says that a nonconstant entire function omits at most one complex value. The punctured-sphere picture from my original notes is useful here. The identity map gives a holomorphic map from \(\mathbb C\) to a once-punctured sphere, while

\[
e^z:\mathbb C\to\mathbb C\setminus\{0\}
\]

maps \(\mathbb C\) to a twice-punctured sphere. A nonconstant holomorphic map from \(\mathbb C\) into a sphere with at least three punctures is impossible; one must change the source, for example to the disc or a half-plane.

From this viewpoint, the familiar fact \(e^z\ne0\) is the model case showing that one omitted finite value is possible, while Little Picard rules out two.

---

## Chapter 17 — \(H^p\)-Spaces

This chapter returns to the disc and gives a much sharper account of holomorphic Hardy spaces: boundary traces, canonical factorization, invariant subspaces, and the Hilbert transform.

### 1. Harmonic \(h^p\) versus holomorphic \(H^p\)

It is important to distinguish the two theories:

\[
\begin{array}{rcl}
h^1 &\longleftrightarrow& \text{finite boundary measures},\\
h^p,\quad p>1 &\longleftrightarrow& L^p(\mathbb T),\\
H^p &\longleftrightarrow& \text{the analytic Hardy subspace of }L^p(\mathbb T).
\end{array}
\]

For \(0<p<\infty\), a holomorphic function belongs to \(H^p\) when

\[
\sup_{0<r<1}
\frac1{2\pi}\int_0^{2\pi}|f(re^{i\theta})|^p\,d\theta
<\infty.
\]

Rudin proves nontangential boundary limits almost everywhere and the appropriate \(L^p\) control. The boundary functions are not arbitrary \(L^p\)-functions: their negative Fourier coefficients vanish.

At \(p=1\), the improvement from harmonic to holomorphic is substantial. A general \(h^1\)-function may have only a measure as boundary data. The F. and M. Riesz theorem says that an analytic measure is absolutely continuous, so an \(H^1\)-function has an actual \(L^1\) boundary trace.

### 2. Blaschke–singular–outer factorization

A nonzero \(H^p\)-function admits a canonical factorization

\[
f=B SO.
\]

The factors encode different information:

- \(B\), the Blaschke product, records the zeros in the disc;
- \(S\), a singular inner function, records a positive singular boundary measure;
- \(O\), the outer function, is determined by the boundary magnitude.

Schematically,

\[
S(z)
=
\exp\!\left(
-\int_{\mathbb T}\frac{\zeta+z}{\zeta-z}\,d\sigma(\zeta)
\right),
\]

with \(\sigma\) singular, while

\[
O(z)
=
\exp\!\left(
\int_{\mathbb T}
\frac{\zeta+z}{\zeta-z}
\log|f^*(\zeta)|\,dm(\zeta)
\right)
\]

up to a unimodular constant and normalization conventions.

Both \(B\) and \(S\) are inner: their boundary modulus is \(1\) almost everywhere. The outer factor therefore carries the boundary modulus, while the inner factor carries the zeros and singular boundary obstruction.

Rudin first constructs the outer factor and then proves that the quotient is inner. Another way I find useful is to remove the zero factor \(B\), study the positive harmonic representation associated with \(\log|f|\), and use its Lebesgue decomposition: the singular part reconstructs \(S\), while the absolutely continuous boundary data reconstructs \(O\). This also makes the potential-theoretic content of the factorization visible.

### 3. Nevanlinna class

The Nevanlinna class allows a harmonic majorant for \(\log^+|f|\). Its elements can be represented as quotients of bounded holomorphic functions. This enlarges Hardy theory while retaining enough factorization and boundary structure to control zeros and singularities.

### 4. Beurling's theorem

Under the coefficient identification

\[
\ell^2(\mathbb N_0)
\cong
H^2,
\qquad
(a_n)\longleftrightarrow\sum_{n\ge0}a_nz^n,
\]

the unilateral shift becomes multiplication by \(z\):

\[
Sf(z)=zf(z).
\]

Beurling's theorem classifies every nonzero closed \(S\)-invariant subspace:

\[
M=\theta H^2
\]

for an inner function \(\theta\), unique up to a unimodular constant.

The key move is to model the separable Hilbert space as \(H^2\), where the shift becomes multiplication by \(z\) and the function-space structure becomes available. The richness of the invariant-subspace lattice is exactly the richness of inner functions—their Blaschke zeros and singular factors. More precisely, the theorem classifies the multiplicity-one unilateral shift; an arbitrary operator is not turned into this shift merely by identifying its Hilbert space with \(H^2\).

### 5. Schwarz integrals and the Hilbert transform

The harmonic conjugate of a Poisson extension leads to the circular Hilbert transform. On Fourier coefficients it is the multiplier

\[
\widehat{Hf}(n)
=
-i\,\operatorname{sgn}(n)\widehat f(n).
\]

Its strong boundedness range is

\[
\|Hf\|_p\le C_p\|f\|_p,
\qquad 1<p<\infty.
\]

The endpoints require different substitutes: weak-\(L^1\) behavior near \(p=1\) and BMO near \(p=\infty\). This is the point where Hardy-space boundary theory meets singular-integral theory.

---

## Chapter 18 — Elementary Theory of Banach Algebras

This chapter develops Banach-algebra techniques and then applies them to the disc algebra and Wiener's theorem. Its conceptual center is that invertibility can be tested by scalar-valued homomorphisms.

### 1. Resolvents, spectra, and the spectral radius

For an element \(x\) in a unital Banach algebra \(A\), the spectrum is

\[
\sigma_A(x)
=
\{\lambda\in\mathbb C:x-\lambda e\text{ is not invertible}\}.
\]

The resolvent set is open, the resolvent depends holomorphically on \(\lambda\), and Liouville's theorem implies that the spectrum is nonempty. It is also compact.

The spectral-radius formula is

\[
r_A(x)
=
\max_{\lambda\in\sigma_A(x)}|\lambda|
=
\lim_{n\to\infty}\|x^n\|^{1/n}.
\]

If \(A\) is a closed subalgebra of a larger Banach algebra \(B\) with the inherited norm and the same unit, the spectrum may shrink when passing to \(B\), but the spectral radius remains the same because the powers and their norms have not changed. This should not be read as a statement about arbitrary embeddings with unrelated norms.

The disc-algebra example is particularly sharp. The coordinate function has the closed disc as spectrum in \(A(\mathbb D)\), but only the unit circle as spectrum in \(C(\mathbb T)\); the radii agree.

### 2. Maximal ideals and characters

By Gelfand–Mazur, the quotient of a commutative unital Banach algebra by a maximal ideal is \(\mathbb C\). Hence maximal ideals are kernels of multiplicative linear functionals, or **characters**.

If \(\Delta(A)\) is the character space, the Gelfand transform is

\[
\widehat x(h)=h(x),
\qquad h\in\Delta(A).
\]

The spectrum becomes

\[
\sigma_A(x)
=
\{h(x):h\in\Delta(A)\}.
\]

Thus a nonlinear algebraic condition—failure of invertibility—is detected by scalar evaluations.

### 3. The disc algebra and a Bézout theorem

If \(f_1,\dots,f_n\in A(\mathbb D)\) have no common zero on \(\overline{\mathbb D}\), then there exist \(g_1,\dots,g_n\in A(\mathbb D)\) such that

\[
\sum_{j=1}^n f_jg_j=1.
\]

The proof identifies all characters of the disc algebra as evaluations at points of \(\overline{\mathbb D}\). Therefore the ideal generated by the \(f_j\)'s lies in no maximal ideal and must be the whole algebra.

Rudin also proves that the disc algebra, restricted to \(\mathbb T\), is a maximal **closed** subalgebra of \(C(\mathbb T)\). The word “closed” is part of the theorem: if

\[
A(\mathbb D)|_{\mathbb T}
\subset B\subset C(\mathbb T)
\]

and \(B\) is a closed subalgebra, then either \(B=A(\mathbb D)|_{\mathbb T}\) or \(B=C(\mathbb T)\).

### 4. Wiener's \(1/f\) theorem

Let

\[
f(e^{i\theta})
=
\sum_{n\in\mathbb Z}a_ne^{in\theta},
\qquad
\sum_n|a_n|<\infty.
\]

If

\[
f(e^{i\theta})\ne0
\qquad\text{for every }\theta,
\]

then

\[
\frac1{f(e^{i\theta})}
=
\sum_{n\in\mathbb Z}b_ne^{in\theta},
\qquad
\sum_n|b_n|<\infty.
\]

The proof gives the pattern in its cleanest form. Put the \(\ell^1\)-norm on the Fourier coefficients, identify every character as evaluation on the circle, observe that the Gelfand transform of \(f\) never takes the value \(0\), and conclude that \(f\) is invertible in the Wiener algebra.

The assumption is nowhere vanishing, not merely \(f\not\equiv0\).

---

## Chapter 19 — Holomorphic Fourier Transforms

This chapter has two parts. First, Paley–Wiener theory converts Fourier support into holomorphic extension and growth. Second, this conversion is used to characterize quasi-analytic classes of smooth real functions.

### 1. The half-plane Paley–Wiener theorem

Use the Fourier convention

\[
F(t)=\int_{-\infty}^{\infty}f(x)e^{-itx}\,dx,
\qquad
f(x)=\frac1{2\pi}\int_{-\infty}^{\infty}F(t)e^{itx}\,dt.
\]

Thus the Fourier inversion formula has the coefficient \(1/(2\pi)\). If \(F\in L^2(0,\infty)\), its complexified inverse transform is, for \(\Im z>0\),

\[
f(z)
=
\frac1{2\pi}
\int_0^\infty F(t)e^{itz}\,dt.
\]

The factor \(e^{-t\Im z}\) makes \(f\) holomorphic in the upper half-plane, and Plancherel gives

\[
\sup_{y>0}
\int_{-\infty}^{\infty}|f(x+iy)|^2\,dx
<\infty.
\]

Conversely, every holomorphic function satisfying this uniform \(L^2\) bound has such a representation with Fourier data supported in \([0,\infty\)). The reverse direction is the deeper one; Cauchy integral arguments recover the spectral support from holomorphicity.

It is best to keep the modes of convergence separate. The theorem gives \(L^2\) boundary convergence. Almost-everywhere or nontangential boundary convergence is a related Hardy-space result, not the same assertion, and pointwise convergence at every boundary point is not guaranteed.

This also fits the larger boundary-theory picture from Chapters 11 and 17. Harmonic \(h^1\)-functions in the half-plane may have finite measures as traces, while \(h^2\)-functions have \(L^2\)-traces. Holomorphic \(H^1\) and \(H^2\) select the positive-frequency subspaces: absolute continuity in the \(H^1\) case, and Fourier support in \([0,\infty)\) in the \(H^2\) case.

### 2. Compact support and entire functions of exponential type

If the Fourier data are supported in \([-A,A]\), then

\[
f(z)
=
\frac1{2\pi}
\int_{-A}^{A}F(t)e^{itz}\,dt
\]

extends to an entire function, with growth controlled by

\[
|f(x+iy)|
\lesssim
e^{A|y|}\|F\|_2.
\]

The converse is the remarkable part: an entire function of exponential type \(A\) whose restriction to the real axis lies in \(L^2\) has Fourier transform supported in \([-A,A]\).

Thus

\[
\boxed{
\text{compact frequency support}
\longleftrightarrow
\text{entire extension with controlled exponential growth}.
}
\]

While reading, I found the phrase **holomorphic inverse Fourier transform** more suggestive: the Paley–Wiener formulas complexify the Fourier inversion integral from the real line into the upper half-plane or the whole plane. This is a matter of viewpoint—Fourier and inverse Fourier transforms differ only by sign and normalization—but it emphasizes the direction of reconstruction visible in these formulas.

### 3. Quasi-analytic classes

Let a logarithmically convex sequence \(M_n\) control the derivatives of a smooth function:

\[
\|f^{(n)}\|_\infty\le C A^n M_n.
\]

The class is quasi-analytic if the Taylor jet at one point determines the entire function:

\[
f^{(n)}(x_0)=0\quad\forall n
\quad\Longrightarrow\quad
f\equiv0.
\]

For logarithmically convex \(M_n\), the Denjoy–Carleman condition may be written in the standard equivalent forms

\[
\sum_{n=1}^\infty\frac{M_{n-1}}{M_n}=\infty,
\qquad\text{or equivalently}\qquad
\sum_{n=1}^\infty M_n^{-1/n}=\infty,
\]

with the usual normalization conventions.

The derivative estimates behind this theory are tied to Landau–Kolmogorov inequalities. The analytic class \(M_n=n!\) is quasi-analytic because its derivative bounds correspond to a bounded holomorphic extension to a strip, where ordinary analytic uniqueness applies. Denjoy–Carleman identifies exactly how much faster \(M_n\) may grow before flat nonzero functions become possible.

### 4. Gevrey classes and flat functions

The Gevrey class of order \(s\) uses

\[
M_n=(n!)^s.
\]

For \(s=1\) this is the analytic scale. For \(s>1\), compactly supported smooth functions exist and the class is not quasi-analytic.

The standard flat function

\[
f(x)=
\begin{cases}
e^{-1/x^2},&x>0,\\
0,&x\le0,
\end{cases}
\]

has \(f^{(n)}(0)=0\) for every \(n\) but is not identically zero. Under the standard convention its critical Gevrey order is \(3/2\); it also belongs to every larger Gevrey class. This is the concrete obstruction to quasi-analyticity: the topology of \(C^\infty\) allows a function to hide completely from its Taylor jet.

---

## Chapter 20 — Uniform Approximation by Polynomials

The final chapter is devoted to one theorem, but it gathers tools from across the book: Tietze extension, convolution, \(\bar\partial\), conformal mapping, and Runge approximation.

### 1. Mergelyan's theorem

Let \(K\subset\mathbb C\) be compact and assume

\[
\mathbb C\setminus K
\quad\text{is connected}.
\]

If

\[
f\in C(K)\cap H(K^\circ),
\]

then for every \(\varepsilon>0\) there is a polynomial \(P\) such that

\[
\sup_{z\in K}|f(z)-P(z)|<\varepsilon.
\]

The connected-complement hypothesis is indispensable: if \(K\) separates the plane, a function may carry nontrivial winding or poles in a hole that polynomials cannot reproduce.

Mergelyan improves Runge in the regularity required of \(f\). Runge directly approximates functions holomorphic on a neighborhood of \(K\). Mergelyan assumes only continuity on \(K\) and holomorphicity in the possibly very irregular interior \(K^\circ\).

### 2. The proof architecture

The proof proceeds through four transformations.

**Extension.** Tietze's theorem extends \(f\) from \(K\) to a compactly supported continuous function on the plane.

**Smoothing.** Convolution with a small smooth kernel produces \(\Phi\in C_c^1(\mathbb C)\) such that

\[
\|f-\Phi\|_K
\le \omega_f(\delta),
\]

where \(\omega_f\) is the modulus of continuity. Deep inside \(K^\circ\), the mean-value property gives \(\Phi=f\), hence

\[
\bar\partial\Phi=0
\]

there. The failure of holomorphicity is therefore confined to a thin neighborhood of the boundary, and its size is controlled by \(\omega_f(\delta)/\delta\).

**Repairing \(\bar\partial\).** The Cauchy–Green formula gives

\[
\Phi(z)
=
-\frac1\pi
\iint_{\mathbb C}
\frac{\bar\partial\Phi(\zeta)}{\zeta-z}\,dA(\zeta).
\]

Rudin covers the support of \(\bar\partial\Phi\) by small discs centered outside \(K\). Lemma 20.2 replaces the Cauchy kernels associated with these boundary pieces by functions holomorphic on a neighborhood of \(K\), with quantitative error control. This produces \(F\in H(\Omega)\) for some open \(\Omega\supset K\) such that

\[
\|F-f\|_K
\lesssim
\omega_f(\delta).
\]

**Runge.** Since \(\mathbb C\setminus K\) is connected, Runge approximates \(F\) uniformly on \(K\) by polynomials. Letting \(\delta\downarrow0\) finishes the proof.

### 3. Why the proof is conceptually interesting

The intermediate smooth function \(\Phi\) is generally not holomorphic throughout \(K^\circ\), so the first approximation can leave the closed polynomial-approximation space \(P(K)\). Rudin explicitly points this out. What saves the proof is quantitative control of the defect:

\[
\bar\partial\Phi
\quad\text{is small and localized near }\partial K.
\]

The Cauchy transform then turns this defect into a correctable error. In modern language, the proof has the form

\[
\text{extend}
\to
\text{smooth}
\to
\text{measure the PDE defect}
\to
\text{solve or approximate away the defect}
\to
\text{apply global approximation}.
\]

This is a fitting conclusion to the book. The final theorem genuinely uses real-variable approximation, topology of complements, complex differential operators, conformal mapping estimates, and functional approximation in one proof.

---

### References

- Walter Rudin, *Real and Complex Analysis*, 3rd ed.
- Anthony W. Knapp, *Basic Real Analysis*.
- Peter L. Duren, *Theory of \(H^p\) Spaces*.
