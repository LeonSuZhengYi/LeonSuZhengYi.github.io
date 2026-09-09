# Reading Big Rudin: Chapters 1–9

*Reading notes on the real-analysis half of Walter Rudin's* Real and Complex Analysis

This is an English version of the chapter-by-chapter notes I wrote while reading Chapters 1–9 of *Real and Complex Analysis*. I have kept the original structure and comments as much as possible, and only added formulas where they make the notes easier to read.

---

## Chapter 1 — Abstract Integration

This chapter first introduces two basic set-theoretic structures that real analysis cares about: **topology** and **\(\sigma\)-algebra**. They lead respectively to continuous functions and measurable functions, so in general they are relatively independent. Of course, once we generate the Borel sets from a topology, the measurable structure becomes dependent on the topology.

Then comes the standard measure-theory material: measures, simple functions, integration of nonnegative functions, convergence theorems, and integration of complex-valued functions.

Rudin uses the same order as in *Baby Rudin*:

\[
\text{Monotone Convergence}
\Longrightarrow
\text{Fatou's Lemma}
\Longrightarrow
\text{Dominated Convergence}.
\]

This order lets the final version of Dominated Convergence include complex-valued functions. At the beginning we only have the integral of nonnegative functions, so naturally the Monotone Convergence Theorem and Fatou's Lemma are first proved only in that setting.

One small point: linearity of the integral for complex-valued functions relies on \(L^1\)-integrability, while for nonnegative functions one does not need integrability in order to define the integral.

Rudin also discusses the **completion of a measure** here—I think this is written more cleanly than in Royden. By adding every subset of every null set, we enlarge the \(\sigma\)-algebra, and therefore also enlarge the class of measurable functions. This mainly makes later arguments more convenient.

---

## Chapter 2 — Positive Borel Measures

There is actually quite a lot in this chapter. I would summarize it in four parts.

### 1. Urysohn's lemma and partitions of unity

Rudin first introduces some topological tools, ending with a Urysohn-type lemma and partitions of unity on locally compact Hausdorff spaces. Both are important in the later construction of the Riesz representation theorem.

Urysohn's lemma is mainly used to construct a kind of **soft indicator function**. Instead of a discontinuous characteristic function, one builds a continuous \(f\) with, schematically,

\[
0\le f\le 1,
\qquad
f=1 \text{ on }K,
\qquad
\operatorname{supp}f\subset V,
\]

where \(K\subset V\), \(K\) is compact, and \(V\) is open. Then the value of a linear functional on such functions can be used to approximate the measure of sets.

Partitions of unity are used to decompose a function finely, so that different parts can be controlled separately and then recombined.

### 2. Riesz representation on LCH spaces

The core of the chapter is the Riesz representation theorem on a locally compact Hausdorff space: a positive linear functional on \(C_c(X)\) can be represented by a Borel measure,

\[
\Lambda(f)=\int_X f\,d\mu.
\]

The resulting measure has regularity properties. Outer regularity comes directly from the construction. Inner regularity is first obtained for sets of finite measure; when the ambient space is \(\sigma\)-compact, it holds for all measurable sets.

There is also a useful reverse-engineering way to see why Rudin's construction has the form it does. Suppose in advance that

\[
\Lambda(f)=\int_X f\,d\mu.
\]

For an open set \(V\), every continuous soft indicator satisfying \(0\le f\le 1\) and \(\operatorname{supp}f\subset V\) must satisfy \(\Lambda(f)\le\mu(V)\). Conversely, Urysohn's lemma lets such functions equal \(1\) on compact subsets of \(V\), so if the representing measure is to exist, one is naturally led to define

\[
\mu(V)
=
\sup\bigl\{\Lambda(f): f\in C_c(X),\ 0\le f\le1,\ \operatorname{supp}f\subset V\bigr\}.
\]

Rudin writes this using his notation \(f\prec V\). For an arbitrary set \(E\), one then defines the outer regularization

\[
\mu(E)=\inf_{V\supset E,\;V\text{ open}}\mu(V).
\]

So the proof is not really guessing a measure out of nowhere. It starts from the formula a representing measure *would have to satisfy* on open sets, with Urysohn functions playing the role of continuous characteristic functions. This also explains why outer regularity is built into the measure from the beginning rather than added afterward.

### 3. Three constructions of Lebesgue measure

At this point we have seen three constructions of Lebesgue measure on \(\mathbb R^n\):

1. the symmetric-difference metric completion in *Baby Rudin*;
2. the route in *Big Rudin*: Riesz representation + the Riemann integral as a positive linear functional on \(C_c(\mathbb R^n)\);
3. the Carathéodory-criterion route, which Rudin does not use here.

### 4. Lusin's theorem

Finally Rudin proves Lusin's theorem in the LCH setting: on a set of finite measure, a measurable function can be approximated by a compactly supported continuous function after discarding a set of arbitrarily small measure. This is later used directly to prove density of \(C_c\) in \(L^p\). On \(\mathbb R^n\), continuous functions can then be smoothed further by convolution.

There are also some smaller results I had not seen before. For example, one can prove that **every subset of the real line with positive measure contains a nonmeasurable subset**. So nonmeasurable sets are much more abundant than the usual statement “there exists a Vitali set” suggests.

Also, the proof technique behind Urysohn's lemma appears in other topology-to-function results such as the Tietze extension theorem: use a sufficiently fine **topological layering** to construct a continuous function.

---

## Chapter 3 — \(L^p\)-Spaces

This chapter is relatively short. It begins with convex functions and Jensen's inequality in the probability-measure form, and then discusses \(L^p\)-spaces on LCH spaces.

A very useful feature of the Lebesgue integral shows up here: if we need to prove that a nonnegative function—often a limit constructed from a sequence—is finite almost everywhere, it is enough to prove that some \(L^p\)-norm is finite. Hölder and Minkowski are exactly the tools that make this work:

\[
\int |fg|\,d\mu\le \|f\|_p\|g\|_q,
\qquad
\|f+g\|_p\le \|f\|_p+\|g\|_p.
\]

The standard example is the proof that \(L^p\) is complete. One chooses a fast Cauchy subsequence with

\[
\|f_{n_{k+1}}-f_{n_k}\|_p\le 2^{-k},
\]

and then shows

\[
\sum_{k=1}^{\infty}|f_{n_{k+1}}-f_{n_k}|<\infty
\quad\text{a.e.}
\]

This gives almost-everywhere convergence of the subsequence.

Rudin then proves density of compactly supported simple functions and compactly supported continuous functions in \(L^p\). For the \(L^\infty\)-norm, the completion of \(C_c(X)\) is

\[
C_0(X),
\]

the continuous functions vanishing at infinity, another space that appears constantly in analysis.

---

## Chapter 4 — Elementary Hilbert Space Theory

This chapter is not long: basic Hilbert-space theory. Rudin implicitly handles several results in the nonseparable case as well.

The isomorphism between \(L^2\) and \(\ell^2\) is established through Fourier coefficients—the Riesz–Fischer theorem. More abstractly, if \(\{u_\alpha\}_{\alpha\in A}\) is an orthonormal basis of a Hilbert space \(H\), then

\[
x\longmapsto \bigl(\langle x,u_\alpha\rangle\bigr)_{\alpha\in A}
\]

identifies \(H\) with \(\ell^2(A)\), with Parseval

\[
\|x\|^2=\sum_{\alpha\in A}|\langle x,u_\alpha\rangle|^2.
\]

What I had not thought about before is the nonseparable case. For a single vector \(x\), there can still be only countably many nonzero coefficients. In the \(\ell^2(A)\) picture with counting measure, every \(\ell^2\)-function has at most countable support, even when the cardinality of \(A\) is strictly larger than \(\aleph_0\). So we can still write a Fourier expansion for each vector and retain Bessel's inequality and Parseval's identity.

Rudin then briefly discusses the existence of orthonormal bases in arbitrary Hilbert spaces. This uses an equivalent form of the axiom of choice. While reading, I did not really see much practical difference between invoking Zorn's lemma and the Hausdorff maximality theorem here.

Finally Rudin quickly reviews Fourier series on \(\mathbb T\). In proving that the trigonometric system is an orthonormal basis, he chooses a different good kernel from the one used in *Baby Rudin*.

After finishing the chapter, I think the conceptual center is really **Riesz–Fischer**. The abstract Hilbert-space theory says that an orthonormal basis gives coordinates; Riesz–Fischer says that for \(L^2(\mathbb T)\), the Fourier coefficients are exactly such coordinates, with no gap between an abstract square-summable coefficient sequence and an actual \(L^2\)-function. In that sense, \(L^2\) Fourier analysis is Hilbert-space coordinate theory.

The final picture is

\[
L^2(\mathbb T)\cong \ell^2(\mathbb Z).
\]

---

## Chapter 5 — Examples of Banach Space Techniques

This chapter is very rich. It looks like a chapter about Baire's category theorem and its consequences, but Rudin applies the classical Banach-space results directly to **classical Fourier analysis**. There are three main parts.

### 1. Banach–Steinhaus

Rudin gives a version of the uniform boundedness principle with a stronger dichotomy flavor than the statement in many textbooks. Schematically, for a family of bounded operators, either the operator norms are uniformly bounded, or pointwise blow-up occurs on a dense \(G_\delta\)-set. There is no intermediate picture in which unboundedness is confined to just a few exceptional points.

One strong Fourier consequence is roughly: given any countable dense set \(A\subset\mathbb T\), there are uncountably many continuous functions whose Fourier series diverge at every point of \(A\).

### 2. The open mapping theorem

The proof itself is fairly standard. Rudin then uses the theorem to rule out an \(L^1\)-version of Riesz–Fischer.

The Fourier coefficient map satisfies

\[
\mathcal F:L^1(\mathbb T)\to c_0,
\]

but it is not onto. In other words, there are elements of \(c_0\) that are not the Fourier coefficient sequence of any \(L^1(\mathbb T)\)-function. This is a clean contrast with the positive result

\[
L^2(\mathbb T)\cong \ell^2.
\]

The proof is a good example of how the open mapping theorem converts an algebraic surjectivity claim into a quantitative inequality. If the coefficient map were onto, open mapping would force an estimate of the form

\[
\|f\|_1\le C\|\widehat f\|_\infty.
\]

But the Dirichlet kernels have uniformly bounded Fourier coefficients while their \(L^1\)-norms tend to infinity. So the hypothetical surjectivity immediately contradicts a concrete Fourier example.

For the more general \(L^p\)-\(\ell^{p'}\) picture, Hausdorff–Young gives one-sided results. Roughly, for \(1\le p\le2\), Fourier coefficients map \(L^p\) into \(\ell^{p'}\), but \(\ell^{p'}\) is larger than the image; for \(2\le p\le\infty\), coefficient synthesis maps \(\ell^{p'}\) into \(L^p\), but \(L^p\) is again larger.

### 3. Hahn–Banach and the Poisson kernel

Rudin proves Hahn–Banach for normed spaces. The proof is very concise, but it is probably the clearest proof of Hahn–Banach I have seen. Rudin's skill is very visible here.

He then combines Hahn–Banach with the Chapter 2 Riesz representation theorem to derive the Poisson kernel abstractly.

The idea is:

1. On a suitable class of boundary functions, the interior value is uniquely determined by the boundary value, and this dependence is linear.
2. Regard this dependence as a linear functional.
3. Use Hahn–Banach and then Riesz to represent it by a probability measure:
   \[
   L(f)=\int_{\mathbb T}f\,d\mu.
   \]
4. Compute the Fourier coefficients of \(\mu\). They are exactly the coefficients of the Poisson kernel, so the measure is identified.

The intuition hidden here is that a finite measure on the circle is determined by its Fourier coefficients.

There is also an exercise about uniform convergence of Fourier series. Hölder continuity implies uniform convergence, which already uses functional-analytic ideas beyond an ordinary calculus course. There is also the Dirichlet–Jordan theorem: continuity + bounded variation implies uniform convergence.

These two regularity assumptions are incomparable. Brownian paths give the Hölder-but-not-BV direction; in the other direction one can construct a continuous monotone function on \([0,1]\) with sufficiently steep local slopes that is BV but not Hölder of any positive exponent. Knapp's *Basic Real Analysis*, Chapter VI, is a useful reference.

---

## Chapter 6 — Complex Measures

This chapter is quite rich, so I read it more slowly. Rudin introduces the following ideas in sequence.

### 1. Complex measures

Rudin explains why real and complex measures are required to take values in \(\mathbb R\) or \(\mathbb C\), rather than being allowed to take infinite values like a positive measure.

The reason comes from the unordered nature of countable unions. If \((E_n)\) are disjoint, then

\[
\mu\!\left(\bigcup_n E_n\right)=\sum_n\mu(E_n)
\]

cannot depend on the enumeration of the \(E_n\)'s. Together with the Riemann rearrangement theorem, this forces absolute convergence.

### 2. Total variation

We want a representation of a complex measure analogous to magnitude + phase for a complex number. It is natural to first extract a positive measure that records only the magnitude of \(\mu\); this is the **total variation** \(|\mu|\).

The total variation is itself a positive finite measure, and it gives the natural norm

\[
\|\mu\|=|\mu|(X).
\]

What I found much more important than the partition definition itself is the **dual formula for total variation**. After the polar decomposition

\[
d\mu=\theta\,d|\mu|,
\qquad |\theta|=1\quad |\mu|\text{-a.e.},
\]

one obtains, for every nonnegative measurable \(f\in L^1(|\mu|)\),

\[
\boxed{
\int_X f\,d|\mu|
=
\sup_{|g|\le f}
\left|\int_X g\,d\mu\right|
}.
\]

Indeed, for every admissible \(g\) with \(|g|\le f\),

\[
\left|\int g\,d\mu\right|
=
\left|\int g\theta\,d|\mu|\right|
\le
\int |g|\,d|\mu|
\le
\int f\,d|\mu|,
\]

and equality is obtained by choosing the conjugate phase, \(g=f\overline\theta\).

For a measurable set \(E\), this becomes

\[
\boxed{
|\mu|(E)
=
\sup_{|g|\le \chi_E}
\left|\int_X g\,d\mu\right|
}.
\]

This formula changed how I think about total variation. It says that \(|\mu|\) is not merely a positive measure manufactured from partitions: it is the **modulus of the action of \(\mu\)**. Given a pointwise budget \(f\), \(\int f\,d|\mu|\) is exactly the largest absolute value that integration against \(\mu\) can produce under that budget.

This dual characterization is also the key to reverse-engineering the complex Riesz representation theorem later in the chapter.

### 3. Radon–Nikodym and von Neumann's trick

A more general question is: given measures \(\alpha\) and \(\beta\), when can \(\beta\) be represented by a density with respect to \(\alpha\)? This is Radon–Nikodym:

\[
\beta\ll\alpha
\quad\Longrightarrow\quad
\beta(E)=\int_E h\,d\alpha.
\]

Rudin uses von Neumann's argument. This time I finally understood its motivation.

The density \(d\beta/d\alpha\) is a ratio, and it may blow up to infinity. Instead, define

\[
\nu=\alpha+\beta.
\]

Now \(\beta\) is only a bounded **proportion** of \(\nu\). We first obtain \(0\le g\le1\) such that

\[
d\beta=g\,d\nu,
\qquad
d\alpha=(1-g)\,d\nu,
\]

and then recover the original ratio by

\[
\frac{d\beta}{d\alpha}=\frac{g}{1-g},
\]

with monotone convergence handling the limiting step.

So the key move is

\[
\boxed{\text{bad ratio}\ \longrightarrow\ \text{bounded proportion}\ \longrightarrow\ \text{recover the ratio}.}
\]

As an application, Radon–Nikodym gives the polar decomposition of a complex measure:

\[
d\mu=\theta\,d|\mu|,
\qquad |\theta|=1\quad |\mu|\text{-a.e.}
\]

The RN derivative is the phase, while total variation is the magnitude. In the real case, the same machinery gives the Hahn and Jordan decompositions.

### 4. A common workflow in modern analysis

A pattern that seems very common in modern analysis is

\[
\boxed{\text{weaken / dualize}\ \longrightarrow\ \text{represent}\ \longrightarrow\ \text{regularize}.}
\]

One can think of an axis

\[
\text{linear functional (distribution)}
\longrightarrow
\text{measure}
\longrightarrow
\text{integrable function}
\longrightarrow
\text{smooth function}.
\]

The farther left, the more abstract and structurally weak the object is, and usually the easier it is to construct. The farther right, the more concrete and regular it is, and the harder it is to obtain.

Rudin's Poisson-kernel construction in Chapter 5 is one example. His \(L^p\)-duality theorem is another: first get a measure from a functional, then use Radon–Nikodym to get a function, and finally show that the function belongs to the correct \(L^q\)-class.

The same pattern appears in the proof of Dunford–Pettis and in parts of Hardy-space theory (I no longer remember exactly which theorem I had in mind when I wrote this note). The representation of functionals by measures also extends naturally in distribution theory, from order zero to positive order. Elliptic PDE theory often follows a broadly similar route.

### 5. The complex Riesz representation theorem: reverse-engineering from total variation

Finally Rudin proves the complex version of Riesz representation:

\[
C_0(X)^*\cong M(X),
\qquad
\Phi(h)=\int_X h\,d\mu,
\qquad
\|\Phi\|=|\mu|(X).
\]

The proof becomes much more transparent if one starts from the **dual formula for total variation** rather than from Rudin's technical construction.

Suppose for a moment that the theorem were already true, so that

\[
\Phi(h)=\int_X h\,d\mu.
\]

What positive functional should correspond to the magnitude \(|\mu|\)? The total-variation formula above already tells us exactly what it has to be. For \(f\ge0\),

\[
\int_X f\,d|\mu|
=
\sup_{|h|\le f}
\left|\int_X h\,d\mu\right|
=
\sup_{|h|\le f}|\Phi(h)|.
\]

So we are essentially forced to define the **modulus of the functional** by

\[
\boxed{
|\Phi|(f)
:=
\sup\bigl\{|\Phi(h)|: h\in C_c(X),\ |h|\le f\bigr\},
\qquad f\in C_c(X),\ f\ge0.
}
\]

Rudin denotes this positive object by \(A\). From the reverse-engineering viewpoint, this definition is not a clever trick: it is simply the measure-side total-variation formula translated word for word to the functional side.

Once this has been guessed, the rest of the architecture is almost forced. One verifies that \(|\Phi|\) is a positive linear functional on \(C_c(X)\), and then the positive Riesz theorem from Chapter 2 gives a positive regular Borel measure \(\lambda\) such that

\[
|\Phi|(f)=\int_X f\,d\lambda.
\]

If the reverse engineering is correct, \(\lambda\) should eventually turn out to be exactly \(|\mu|\).

Moreover,

\[
|\Phi(h)|
\le
|\Phi|(|h|)
=
\int_X |h|\,d\lambda,
\]

so \(\Phi\) is automatically continuous with respect to the \(L^1(\lambda)\)-norm. The \(L^1\)-duality theorem then recovers the missing phase: there is a \(g\in L^\infty(\lambda)\), \(|g|\le1\), such that

\[
\Phi(h)=\int_X hg\,d\lambda.
\]

Thus, setting

\[
d\mu=g\,d\lambda,
\]

we recover the complex measure. The final norm equality forces

\[
|g|=1\quad \lambda\text{-a.e.},
\qquad
\lambda=|\mu|,
\qquad
\|\Phi\|=|\mu|(X).
\]

So the conceptual chain is

\[
\boxed{
\text{TV dual formula}
\longrightarrow
\text{modulus of a functional}
\longrightarrow
\text{positive Riesz}
\longrightarrow
\text{recover the phase}
}.
\]

For me, this is the important part of the proof. Rudin still has to check technically that the supremum above is additive on positive functions and hence really defines a positive linear functional, but after the reverse engineering this is no longer mysterious: it is exactly what must be true if \(|\Phi|\) is the functional counterpart of \(|\mu|\). The technical verification is necessary, but it is not where the main idea lies.

---

## Chapter 7 — Differentiation

This chapter is rich and can be divided into three parts:

1. local fine properties of measures;
2. a measure-theoretic reconstruction of the fundamental theorem of calculus;
3. a measure-theoretic reconstruction of change of variables.

There is a broader way I ended up viewing the chapter. Classical calculus studies functions through a local operation, differentiation, and a global/averaging operation, integration. Here the same architecture is rebuilt at the level of measures: first understand their local fine behavior, then use that information to reconstruct the classical calculus theorems under nearly minimal hypotheses.

### 1. Local fine properties of measures

The analogy is with local differentiation of functions: we now study the local asymptotic behavior of a measure.

Rudin's main technical tool is the finite \(3r\)-covering lemma. The infinite version is the familiar \(5r\)-covering lemma; both are essentially greedy-selection arguments.

He then defines the maximal function directly for a measure,

\[
M\mu(x)
=
\sup_{r>0}
\frac{|\mu|(B(x,r))}{m(B(x,r))},
\]

and proves a weak \(L^1\) estimate of the form

\[
m\{M\mu>\lambda\}
\lesssim
\frac{|\mu|(\mathbb R^n)}{\lambda}.
\]

I like this formulation because many real-analysis texts define the maximal function only for \(L^p\)-functions, while Rudin starts at the measure level.

From this one gets the Lebesgue differentiation theorem for \(L^1_{\mathrm{loc}}\). This is a measure-theoretic extension of the familiar fact that a smooth function can be recovered from its local averages.

If \(\mu\ll m\), then the measure derivative obtained here is exactly the Radon–Nikodym derivative from Chapter 6. For a singular measure, the local derivative is zero almost everywhere.

### 2. FTC for BV functions

The first part gives the ingredients for the fundamental theorem of calculus for BV functions.

A BV function defines a finite real or complex measure, and that measure decomposes as

\[
d\mu=f\,dm+d\mu_s,
\qquad \mu_s\perp m.
\]

The absolutely continuous part corresponds to the classical derivative, while the singular part is invisible to ordinary differentiation almost everywhere.

Therefore a general BV function needs a singular correction to the classical FTC. The natural question is: what is the exact condition under which the usual formula

\[
F(x)-F(a)=\int_a^x F'(t)\,dt
\]

holds? Rudin shows that the answer is **absolute continuity**. Lusin's \(N\)-property is the bridge in the sufficiency direction.

Rudin also gives a Cantor-type function on \([0,1]\) showing that a continuous monotone function may have an \(L^1\) derivative and still fail the FTC.

There is another measure-theoretic way to view this example. One can take absolutely continuous probability measures that converge weakly while concentrating onto a singular limit. The limit has no atoms, so the distribution function is continuous and monotone; but the singularity implies that its derivative is zero almost everywhere. One way to formalize this route uses Prokhorov + Portmanteau. A byproduct is another proof that the Cantor set is uncountable: a nonatomic probability measure cannot live on a countable set.

This also made me notice a useful general picture for sequences of measures: many pathologies come from either **concentration** or **escape of mass**. The Cantor construction is a clean example of concentration producing a singular limit; tightness/Prokhorov-type arguments are precisely what prevent the other failure mode, escape to infinity.

### 3. Change of variables

This is the most technical and clever part of the chapter.

Rudin shows that the Jacobian in classical calculus can be interpreted as the limiting **ratio of transformed volume to original volume**. For a sufficiently good transformation \(T\), one defines an image-volume measure \(\nu\), and its derivative is the Jacobian:

\[
\frac{d\nu}{dm}(x)=|\det DT(x)|.
\]

The proof is quite technical and uses Brouwer's fixed-point theorem. In the route I had in mind while reading, Brouwer itself can be built from Sard's theorem and topological degree, so a surprisingly deep topological argument sits behind this familiar formula.

Rudin's final change-of-variables theorem is also rather strong. We do not need \(T\) to be differentiable at every point; it is enough that the image under \(T\) of the bad set have Lebesgue measure zero.

One can even construct a monotone continuous function on \([0,1]\) that is differentiable at every irrational point and nondifferentiable at every rational point. A classical pointwise COV theorem is not suited to such an example, while Rudin's measure-theoretic version can still apply.

---

## Chapter 8 — Integration on Product Spaces

This chapter is not very long. It is mainly about product measures, Fubini's theorem, and applications. From here we are already at the entrance to **classical harmonic analysis**.

### 1. The monotone class test

The most important viewpoint in the construction of product measure is the monotone class test: if \(\mathcal A\) is the algebra of elementary sets, then the monotone class generated by \(\mathcal A\) is exactly \(\sigma(\mathcal A)\).

### 2. Tonelli–Fubini

For me, the starting question is more important than the final theorem:

> On a product space, which sets have an ``area'' that does not depend on the order in which we measure the two coordinates?

It is easy to verify this for elementary sets. The class of sets with this property is a monotone class, so we immediately get the characteristic-function version of Tonelli. Passing to limits gives Tonelli for nonnegative functions, and then controlling signs gives Fubini.

For \(f\ge0\),

\[
\int_{X\times Y}f\,d(\mu\times\nu)
=
\int_X\left(\int_Y f(x,y)\,d\nu(y)\right)d\mu(x).
\]

For Fubini, the key condition is joint absolute integrability:

\[
\int_{X\times Y}|f|\,d(\mu\times\nu)<\infty.
\]

If the absolute integral diverges, changing the order can fail. Rudin assumes \(\sigma\)-finiteness in the construction; without suitable hypotheses, product-measure and order-of-integration statements can fail.

Rudin also discusses the fact that a product measure need not be complete. Completing it does not affect the useful form of Fubini's theorem.

### 3. Beyond changing the order of integration

Tonelli–Fubini also gives a way to prove that something is ``large.'' Besides cardinality and Baire category, we can prove largeness through measure—for example by showing that a nonnegative quantity is integrable, hence finite almost everywhere.

Rudin gives the \(L^1\) convolution inequality as a prototype:

\[
(f*g)(x)=\int f(x-y)g(y)\,dy,
\qquad
\|f*g\|_1\le \|f\|_1\|g\|_1.
\]

He also derives the layer-cake representation

\[
\int f\,d\mu
=
\int_0^\infty \mu\{f>t\}\,dt
\qquad (f\ge0),
\]

which is extremely important in classical harmonic analysis because it lets us turn weak-type estimates into norm estimates.

As an application, Rudin uses a Marcinkiewicz interpolation argument to upgrade the weak \(L^1\) estimate and prove \(L^p\)-boundedness of the maximal operator for \(p>1\). Hence the maximal function of an \(L^p\)-function is finite almost everywhere.

### 4. Ball averages and the entrance to harmonic analysis

Looking back, the local theory of real analysis has already moved very close to harmonic analysis. Ball averages give the Lebesgue differentiation theorem and the maximal-function theory. A ball average is itself the most basic prototype of an **approximation of the identity**—a ``good kernel'' in Stein's terminology.

For other local averaging kernels, such as the Poisson kernel or heat kernel, one can compare their maximal operators with the Hardy–Littlewood maximal operator for ball averages and then obtain corresponding pointwise recovery results.

This is, roughly, the classical Hardy–Littlewood side of harmonic analysis: study local averaging operators through their kernels and maximal functions.

A mental model I found useful after this chapter is that a large part of **classical harmonic analysis** studies operators generated by kernels and asks for quantitative control of the corresponding averages or oscillations. Fourier partial sums are convolution with the Dirichlet kernel; Poisson and heat extensions use much better-behaved kernels; Hardy–Littlewood theory studies local ball averages. This is certainly not a definition of all modern harmonic analysis, but it explains why convolution, maximal functions, singular integrals, and Fourier analysis keep appearing in the same subject.

---

## Chapter 9 — Fourier Transforms

This chapter is not long. Its main subject is the Fourier transform. At the end Rudin gives a Banach-algebra viewpoint: the Fourier transform is generated by the complex multiplicative functionals of \(L^1\) with convolution.

The reading process also led me to several side observations.

### 1. Fourier series \(\to\) Fourier transform as a literal limit

We usually say that the Fourier transform is the continuous-spectrum version of Fourier series: Fourier coefficients become values of the Fourier transform.

But there is a more direct relation. Fix a smooth compactly supported \(f\), and compute its Fourier series on \([-L,L]\). The frequencies are

\[
\xi_n=\frac{\pi n}{L},
\qquad
\Delta\xi=\frac{\pi}{L}.
\]

With Rudin's symmetric normalization,

\[
\widehat f(\xi)
=
\frac1{\sqrt{2\pi}}
\int_{\mathbb R}f(x)e^{-ix\xi}\,dx,
\]

the Fourier series can be written as the Riemann sum

\[
\frac1{\sqrt{2\pi}}
\sum_{n\in\mathbb Z}
\widehat f(\xi_n)e^{ix\xi_n}\,\Delta\xi,
\]

which converges, as \(L\to\infty\), to

\[
\frac1{\sqrt{2\pi}}
\int_{\mathbb R}\widehat f(\xi)e^{ix\xi}\,d\xi.
\]

In the route I worked out, the Riemann-sum error is of order \(O(L^{-1})\) for this smooth compactly supported case.

On the other hand, Hölder-continuous periodic functions have Fourier series converging uniformly to the function. Comparing the two limits gives the inversion formula first for smooth compactly supported functions, and then one can extend toward the usual \(L^1\) inversion statement—for example under assumptions such as \(f,f'\in L^1\).

The same idea works for Parseval: write it as a Riemann sum, let \(L\to\infty\), obtain Plancherel for smooth compactly supported functions, and then extend by density to \(L^2\). The Fourier transform becomes a unitary operator.

### 2. This is not the usual textbook route

The argument above is not the route used in the textbooks I checked; it came out of my own discussion while reading.

Axler's *MIRA*, Knapp's *Basic Real Analysis*, and *Big Rudin* all develop the Fourier transform more independently. Their inversion/Plancherel proofs typically use convolution with a classical kernel, such as a Poisson or Gaussian kernel, to obtain an approximate inversion or approximate Plancherel formula and then control the limit.

### 3. Translation-invariant subspaces and spectral theory

Rudin then gives an interesting result: if \(M\subset L^2(\mathbb R)\) is a closed translation-invariant subspace and \(P\) is its orthogonal projection, then \(P\) commutes with all translations. After Fourier transform,

\[
\mathcal F P\mathcal F^{-1}=M_{\chi_E}
\]

for some measurable set \(E\).

This is already a very specific infinite-dimensional spectral theorem: the unitary operator diagonalizing the projection is explicitly \(\mathcal F\).

Knapp proves the more general statement: every bounded linear operator \(A\) on \(L^2(\mathbb R^n)\) that commutes with every translation becomes an \(L^\infty\)-multiplier on the Fourier side,

\[
A\tau_y=\tau_yA
\quad\Longrightarrow\quad
\mathcal F A\mathcal F^{-1}=M_m,
\qquad m\in L^\infty.
\]

Examples include convolution operators, translation operators, and the projection above. There are also unbounded versions: differentiation and the Laplacian become multiplication by \(i\xi_j\) and \(|\xi|^2\), respectively.

A finite-dimensional model makes the statement almost obvious. On \(\mathbb C^N\), let \(S\) be the cyclic shift. The operators commuting with \(S\) are the circulant matrices, and the discrete Fourier transform diagonalizes all of them simultaneously. The multiplier theorem on \(L^2(\mathbb R^n)\) is the continuous analogue of exactly this picture.

This also clarified for me why **commuting with all translations is much stronger than mere normality**. Normality tells us that some unitary spectral representation exists. Translation commutation already tells us which commuting family the operator belongs to and therefore essentially specifies the diagonalizing unitary: the Fourier transform.

This is an extremely beautiful unification. It makes it much less surprising that harmonic analysis, operator algebras, spectral theory, and PDE are so closely connected.

### 4. \(L^1\) as a Banach algebra

Finally, \(L^1\) with convolution is a commutative Banach algebra,

\[
\|f*g\|_1\le \|f\|_1\|g\|_1.
\]

Its complex homomorphisms are exactly Fourier-transform evaluations,

\[
\varphi_t(f)=\widehat f(t).
\]

The proof is also conceptually nice. Starting from a nonzero multiplicative functional \(\varphi\), Rudin first represents it in the form

\[
\varphi(f)=\int_{\mathbb R} f(x)p(x)\,dx
\]

with bounded \(p\). Multiplicativity and translation then force

\[
p(x+y)=p(x)p(y).
\]

After modifying on a null set, \(p\) is continuous; the functional equation then implies \(p(x)=e^{\lambda x}\), and boundedness forces \(\lambda=-it\) for some real \(t\). Hence

\[
\varphi(f)=\int f(x)e^{-itx}\,dx=\widehat f(t)
\]

(up to the normalization convention). So the same exponential characters that diagonalize translations are also the characters of the convolution algebra.

Thus the Fourier transform can be generated by all multiplicative linear functionals on the convolution algebra. Later this is exactly the viewpoint of the **Gelfand transform**.

A final parallel: Fourier series and Fourier transforms have more in common than just discrete versus continuous spectrum.

- For Fourier series, \(\ell^1\)-summability of the coefficients gives absolute/uniform convergence.
- For the Fourier transform, inversion asks for \(\widehat f\in L^1\).
- The Fourier coefficient map is an injective contraction
  \[
  L^1(\mathbb T)\hookrightarrow c_0(\mathbb Z).
  \]
- The Fourier transform is an injective contraction
  \[
  L^1(\mathbb R)\hookrightarrow C_0(\mathbb R).
  \]

Under the natural normalizations, both operator norms are at most \(1\).

---

## A stopping point

Chapter 9 is a natural boundary in Rudin: Chapter 10 begins the complex-analysis half of the book.

So I will stop here for now—and go study IELTS for a while.

---

### References

- Walter Rudin, *Real and Complex Analysis*, 3rd ed.
- Anthony W. Knapp, *Basic Real Analysis*.
- Sheldon Axler, *Measure, Integration & Real Analysis*.
- [Original Chinese reading log](https://bgm.tv/group/topic/469584)
