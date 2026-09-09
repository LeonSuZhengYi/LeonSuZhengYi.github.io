---
title: "Some Mathematics Books I Recommend"
date: 2026-09-09
description: "A personal reading guide to real analysis, functional analysis, PDE, probability, optimization, and related topics."
---

# Some Mathematics Books I Recommend

This is a collection of mathematics books that I have found useful and would be happy to recommend.

It is not intended to be a comprehensive list of the "best textbooks" in every subject. The selection is inevitably biased toward my own interests, especially **analysis, probability, PDE, optimization, and dynamics**. More importantly, I care quite a lot about *when* a book should be read. A book can be excellent and still be a poor first introduction to a subject.

So, within each section, the books are arranged roughly from more accessible to more advanced. The ordering is not purely by technical difficulty. I have in mind a progression of the form

\[
\text{learn the objects and basic machinery}
\;\longrightarrow\;
\text{build a coherent picture}
\;\longrightarrow\;
\text{read the subject in a more compressed or abstract form}.
\]

Some books appear implicitly in more than one subject. This is unavoidable: good analysis books tend not to respect artificial boundaries between real analysis, functional analysis, Fourier analysis, probability, and PDE.

---

## Real Analysis

My preferred route through real analysis is roughly

\[
\text{Axler}
\longrightarrow
\text{Royden / Knapp}
\longrightarrow
\text{Rudin}.
\]

The important point is that I would **not** recommend starting with Rudin.

### Sheldon Axler — *Measure, Integration & Real Analysis*

[Book website](https://measure.axler.net/)

This is probably the book I would recommend most strongly for a first systematic encounter with measure-theoretic real analysis.

The exposition is unusually transparent. Definitions are motivated carefully, proofs contain enough detail that one rarely needs to reverse-engineer what the author was thinking, and the book develops a surprisingly large part of the standard graduate analysis toolkit.

Besides measure and integration, it includes \(L^p\) spaces, Hilbert and Banach spaces, Fourier analysis, probability measures, and related topics.

For someone learning modern real analysis for the first time, this would be my default recommendation.

### H. L. Royden and Patrick Fitzpatrick — *Real Analysis*

Royden is a more traditional and systematic graduate real analysis textbook.

I would recommend it after one already has some familiarity with measure and integration. It is particularly useful for consolidating the classical framework of real analysis and filling in details that may remain scattered after a first exposure.

Compared with Axler, it feels closer to the traditional graduate real analysis curriculum.

### Anthony W. Knapp — *Basic Real Analysis* and *Advanced Real Analysis*

[Anthony Knapp's books](https://www.math.stonybrook.edu/~aknapp/)

These two volumes are much broader than their titles suggest.

*Basic Real Analysis* moves from classical calculus and metric spaces through measure theory, differentiation, Fourier analysis, \(L^p\) spaces, topology, integration on locally compact spaces, and Hilbert and Banach spaces.

*Advanced Real Analysis* continues toward distributions, Euclidean Fourier analysis, functional analysis, PDE, manifolds, probability, wavelets, and related subjects.

Together, the two books provide something close to a **map of modern analysis**.

This is why I especially like Knapp after the basic measure-theoretic machinery is already familiar: the point is no longer merely to learn another theorem, but to see where real analysis leads next.

### Walter Rudin — *Principles of Mathematical Analysis* and *Real and Complex Analysis*

I would recommend reading Rudin relatively late.

Both books are famous for their concision, and this is precisely why I do not think they are always ideal for encountering an idea for the first time. Much of what makes Rudin exceptional becomes visible only after one already knows the surrounding theory.

Once the reader has a sufficiently clear mental picture of analysis, however, Rudin becomes extremely rewarding.

The proofs are compressed without being careless. The theorem statements are often stronger and cleaner than one first expects. Seemingly separate parts of analysis are organized into a remarkably coherent structure.

For me, Rudin is therefore less an introduction than a **synthesis**:

\[
\boxed{
\text{first learn the subject, then read Rudin to see its structure}.
}
\]

---

## Functional Analysis

Real analysis books such as Axler, Royden, Knapp, and Rudin already contain a substantial amount of functional analysis. Nevertheless, I think it is worth studying functional analysis again as a subject in its own right.

A useful way to think about the progression is

\[
\text{Hilbert spaces}
\longrightarrow
\text{Banach spaces}
\longrightarrow
\text{weak and weak-* topologies}
\longrightarrow
\text{locally convex spaces}
\longrightarrow
\text{topological vector spaces}.
\]

As the subject develops, we gradually give up structure.

We begin with inner products and norms. We then discover that norm convergence is often too strong and pass to weak topologies. Eventually, even the existence of a useful single norm is abandoned.

### James C. Robinson — *An Introduction to Functional Analysis*

This is the book I would recommend for a first dedicated course in functional analysis.

It begins close to the familiar geometry of Hilbert and Banach spaces and develops the classical results without introducing excessive abstraction too early.

If the functional analysis appearing inside a real analysis course still feels like a collection of disconnected tools, this is a good place to turn those tools into a coherent theory.

### Haim Brezis — *Functional Analysis, Sobolev Spaces and Partial Differential Equations*

Brezis is the book I would recommend once basic Banach and Hilbert space theory is familiar.

One of its main strengths is that the abstract theory is constantly connected to applications. Hahn–Banach, uniform boundedness, weak topology, compactness, \(L^p\) spaces, and operator theory eventually lead naturally to Sobolev spaces and PDE.

This is also where weak topology starts to feel genuinely necessary rather than merely abstract.

In infinite-dimensional analysis, strong convergence is often too much to hope for. Weak convergence gives access to compactness and limiting arguments that would otherwise be unavailable.

### M. Scott Osborne — *Locally Convex Spaces*

After Banach space theory, a natural question is:

> How much of functional analysis actually depends on having a norm?

Locally convex spaces replace a single norm with a family of seminorms. This allows many of the central ideas of functional analysis to survive in substantially more general spaces.

Osborne is useful for making the transition from normed spaces to locally convex and topological vector spaces explicit.

This becomes particularly important once one encounters spaces of smooth functions and distributions.

### Anthony W. Knapp — *Advanced Real Analysis*, Functional Analysis Chapters

Knapp provides another route from Banach spaces toward general topological vector spaces.

The functional analysis chapters are especially useful because the abstraction remains closely connected with Fourier analysis, distributions, operator theory, and PDE.

The progression

\[
\text{Banach spaces}
\longrightarrow
\text{Fréchet / locally convex spaces}
\longrightarrow
\text{distributions}
\]

therefore feels mathematically motivated rather than merely formal.

### J. J. Duistermaat and J. A. C. Kolk — *Distributions: Theory and Applications*

Distributions are one of the clearest places where the theory of topological vector spaces becomes concrete.

The basic idea is to replace an ordinary function by its action on test functions,

\[
T:\varphi\mapsto \langle T,\varphi\rangle.
\]

Differentiation can then be defined by duality:

\[
\langle \partial^\alpha T,\varphi\rangle
=
(-1)^{|\alpha|}
\langle T,\partial^\alpha\varphi\rangle.
\]

A dedicated book on distributions is worthwhile because the subject is not merely about manipulating the Dirac delta. The real structure lies in spaces such as

\[
\mathcal D(\Omega),\qquad
\mathcal D'(\Omega),\qquad
\mathcal S(\mathbb R^n),\qquad
\mathcal S'(\mathbb R^n),
\]

together with the topologies and dualities that make them work.

Distributions form an important bridge:

\[
\boxed{
\text{functional analysis}
\longrightarrow
\text{Fourier analysis}
\longrightarrow
\text{PDE}.
}
\]

### Walter Rudin — *Functional Analysis*

As with Rudin's real analysis books, I would read this relatively late.

Rudin does not organize functional analysis merely as the theory of Banach spaces. The book works naturally at the level of topological vector spaces and develops convexity, duality, weak topologies, distributions, operator theory, Banach algebras, and spectral theory in a highly compressed framework.

Conceptually, one gradually moves from

\[
\text{norm}
\rightsquigarrow
\text{families of seminorms}
\rightsquigarrow
\text{topology}.
\]

Many of the fundamental principles survive.

For me, this is one of the central ideas of functional analysis:

\[
\boxed{
\text{linearity}+\text{topology}+\text{convexity}.
}
\]

A rough reading route is therefore

\[
\text{Robinson}
\longrightarrow
\text{Brezis}
\longrightarrow
\text{Osborne / Knapp}
\longrightarrow
\text{Duistermaat–Kolk}
\longrightarrow
\text{Rudin}.
\]

---

## Complex Analysis

For complex analysis, my recommended progression is much shorter:

\[
\text{Perera–Agarwal–Pinelas}
\longrightarrow
\text{Stein–Shakarchi}.
\]

### Kanishka Perera, Ravi P. Agarwal, and Sandra Pinelas — *An Introduction to Complex Analysis*

This is the book I would recommend for a first serious course in complex analysis.

It develops the classical theory in a relatively gentle and systematic way: analytic functions, contour integration, Cauchy's theorem, power and Laurent series, residues, conformal mappings, harmonic functions, and related topics.

Its main strength is pedagogical clarity.

It is a good book for becoming comfortable with the basic techniques of one complex variable before moving to a more structural treatment.

### Elias M. Stein and Rami Shakarchi — *Complex Analysis*

I would read this after the classical theory is already familiar.

Like the other volumes of the *Princeton Lectures in Analysis*, the book is valuable not merely because of the theorems it contains, but because it connects complex analysis with the rest of mathematics.

Fourier analysis, entire functions, the Gamma and zeta functions, elliptic functions, theta functions, and number theory all begin to interact.

The progression is roughly

\[
\boxed{
\text{learn classical complex analysis}
\longrightarrow
\text{see what complex analysis is connected to}.
}
\]

---

## Fourier Analysis

Several of the real analysis books above already contain substantial Fourier analysis. Axler's *MIRA*, Knapp's *Basic Real Analysis*, and Rudin's *Real and Complex Analysis* all provide useful introductions.

For a first book devoted specifically to Fourier analysis, however, I would recommend:

### Elias M. Stein and Rami Shakarchi — *Fourier Analysis: An Introduction*

This is an excellent first dedicated book on the subject.

The basic progression is

\[
\text{Fourier series}
\longrightarrow
\text{Fourier transform}
\longrightarrow
\text{convolution and kernels}
\longrightarrow
\text{applications}.
\]

The book begins with Fourier series and questions of convergence and summability, then moves to the Fourier transform on \(\mathbb R\) and \(\mathbb R^d\), with applications to PDE, number theory, and other areas.

What I particularly like is that Fourier analysis is presented as a way of thinking about functions and operators, rather than merely as a collection of transform formulas.

For a first systematic encounter with Fourier analysis as an independent subject, this would be my default recommendation.

---

## Partial Differential Equations

For PDE, I would suggest

\[
\text{Jost}
\longrightarrow
\text{Gallouët–Herbin}
\longrightarrow
\text{Evans}.
\]

Conceptually, the progression is

\[
\boxed{
\text{classical PDE}
\longrightarrow
\text{weak formulations}
\longrightarrow
\text{modern PDE theory}.
}
\]

### Jürgen Jost — *Partial Differential Equations*

This is the most accessible PDE book among those listed here.

It introduces the fundamental model equations and many standard methods without requiring the full machinery of modern functional analysis from the very beginning.

The Laplace equation, maximum principles, heat and wave equations, variational ideas, Sobolev spaces, and regularity theory all appear naturally.

I would recommend it for acquiring a first coherent picture of what PDE theory is trying to do.

### Raphaèle Herbin and Thierry Gallouët — *Weak Solutions of Partial Differential Equations*

This is a natural next step once some functional analysis and elementary PDE are familiar.

The central organizing idea is the notion of a **weak solution**.

Instead of requiring a sufficiently smooth function to satisfy

\[
Lu=f
\]

pointwise, one reformulates the equation through integration against test functions and searches for a solution in an appropriate function space.

The core toolkit becomes

\[
\text{Sobolev spaces}
+
\text{weak convergence}
+
\text{compactness}
+
\text{energy estimates}.
\]

This is precisely the point where functional analysis becomes part of the basic language of PDE.

### Lawrence C. Evans — *Partial Differential Equations*

Evans is the standard graduate PDE book I would recommend once the necessary background in real analysis, functional analysis, and Sobolev spaces is already in place.

At this stage, the subject is no longer primarily about explicitly solving individual differential equations.

The central questions become

\[
\boxed{
\text{existence}
+
\text{uniqueness}
+
\text{regularity}
+
\text{qualitative behavior}.
}
\]

Energy methods, compactness, variational methods, weak convergence, and regularity estimates begin to form a reusable PDE toolkit.

For someone who wants to continue toward modern analysis or PDE research, Evans is a natural book to know well.

---

## Probability and Stochastic Analysis

I find it useful to separate this subject into three directions:

1. foundations of probability;
2. stochastic analysis;
3. modern analysis on spaces of probability measures.

### Probability Foundations

#### Zikun Wang — *Foundations of Probability Theory and Its Applications*

This is one of the Chinese-language mathematics books that I would particularly recommend.

Although it is an older book, I think it remains an excellent introduction to probability theory. The presentation has a distinctly mathematical flavor: probability is developed as a coherent theory rather than as a collection of formulas for calculating distributions and expectations.

For a Chinese-speaking reader encountering probability seriously for the first time, this book is still very much worth reading.

#### Jean-François Le Gall — *Measure Theory, Probability, and Stochastic Processes*

This is the probability book I would recommend to someone who already has some real analysis and wants a clean measure-theoretic development.

The progression is particularly natural:

\[
\text{measure theory}
\longrightarrow
\text{probability}
\longrightarrow
\text{conditional expectation}
\longrightarrow
\text{martingales}
\longrightarrow
\text{stochastic processes}.
\]

Measure theory is not treated as preliminary machinery to be forgotten once probability begins. It remains the language in which the subject is formulated.

---

### Stochastic Analysis

Once the foundations of probability are familiar, the character of the subject changes.

We begin to study random processes dynamically, introduce filtrations and stopping times, integrate with respect to random processes, and solve differential equations driven by noise.

The basic route is

\[
\text{Brownian motion}
\longrightarrow
\text{martingales}
\longrightarrow
\text{stochastic integration}
\longrightarrow
\text{Itô calculus}
\longrightarrow
\text{SDEs}.
\]

#### Jean-François Le Gall — *Brownian Motion, Martingales, and Stochastic Calculus*

This is a concise and rigorous introduction to stochastic calculus.

One eventually reaches the fundamental change from ordinary calculus to Itô calculus. For example, instead of simply writing

\[
df(X_t)=f'(X_t)\,dX_t,
\]

quadratic variation produces a second-order contribution:

\[
df(X_t)
=
f'(X_t)\,dX_t
+
\frac12 f''(X_t)\,d[X]_t.
\]

Once this becomes natural, much of stochastic analysis begins to fit together.

#### Andrea Pascucci — *Probability Theory II: Stochastic Calculus*

Pascucci provides a broader and somewhat more gradual treatment of stochastic calculus.

Brownian motion, Markov processes, Poisson processes, stopping times, continuous martingales, finite-variation processes, stochastic integration, Itô's formula, and changes of measure all appear.

I view Pascucci and Le Gall as complementary rather than interchangeable. Le Gall gives a particularly clean route through the theory, while Pascucci spends more time developing the surrounding machinery.

---

### Probability Measures, Weak Convergence, and Optimal Transport

There is another direction that I find particularly interesting: instead of merely using probability measures to describe random variables, one studies the measures themselves as objects carrying topology, geometry, and dynamics.

#### Vladimir I. Bogachev — *Weak Convergence of Measures*

[AMS book page](https://bookstore.ams.org/surv-234)

Weak convergence is one of the fundamental languages of modern probability.

Instead of asking for strong pointwise convergence, one studies

\[
\mu_n\rightharpoonup\mu
\]

through convergence against test functions:

\[
\int f\,d\mu_n
\longrightarrow
\int f\,d\mu.
\]

This framework underlies convergence in distribution, tightness, Prokhorov-type compactness arguments, and many limiting procedures throughout probability and analysis.

Bogachev develops this perspective systematically and also studies the topology of spaces of measures themselves.

#### Filippo Santambrogio — *Optimal Transport for Applied Mathematicians: Calculus of Variations, PDEs, and Modeling*

Optimal transport takes the study of probability measures in another direction.

Given two measures \(\mu\) and \(\nu\), one asks how mass can be transported between them at minimum cost:

\[
\inf_{\gamma\in\Pi(\mu,\nu)}
\int c(x,y)\,d\gamma(x,y).
\]

What begins as an optimization problem eventually leads to geometry on spaces of probability measures.

The Wasserstein distance

\[
W_p(\mu,\nu)
\]

allows one to speak about curves, variational problems, gradient flows, and PDE on spaces of measures.

This creates a particularly beautiful interface:

\[
\boxed{
\text{probability}
+
\text{optimization}
+
\text{PDE}
+
\text{geometry}.
}
\]

---

## Optimization

For optimization, I would recommend two books representing two somewhat different generations of the subject:

\[
\text{Nocedal–Wright}
\longrightarrow
\text{Ryu–Yin}.
\]

This is not simply an easy-to-hard progression. The viewpoint itself changes.

### Jorge Nocedal and Stephen J. Wright — *Numerical Optimization*

[Springer page](https://link.springer.com/book/10.1007/978-0-387-40065-5)

This is the first optimization book I would recommend.

It develops the classical toolkit of numerical optimization: line searches, trust-region methods, Newton and quasi-Newton methods, conjugate gradients, constrained optimization, penalty methods, interior-point methods, SQP, and related algorithms.

The basic structure is often

\[
\text{construct a local model}
\longrightarrow
\text{choose a search direction}
\longrightarrow
\text{choose a step}
\longrightarrow
\text{prove convergence}.
\]

It is an excellent introduction to the classical language of continuous numerical optimization.

### Ernest K. Ryu and Wotao Yin — *Large-Scale Convex Optimization: Algorithms & Analyses Via Monotone Operators*

This book reflects a more modern viewpoint on large-scale convex optimization.

Many algorithms that initially look unrelated can be unified through monotone operator theory.

Instead of studying each optimization method separately, one studies inclusions such as

\[
0\in A(x)+B(x)
\]

and the fixed-point iterations generated by resolvents, averaged operators, and splitting schemes.

The conceptual progression becomes

\[
\text{convex optimization}
\longrightarrow
\text{monotone inclusions}
\longrightarrow
\text{operator splitting}.
\]

This viewpoint is especially useful for proximal methods, splitting algorithms, large-scale optimization, inverse problems, signal processing, machine learning, and distributed computation.

I think the contrast between the two books is particularly instructive:

\[
\boxed{
\begin{aligned}
\text{Nocedal–Wright}:&
\quad \text{classical numerical optimization},\\
\text{Ryu–Yin}:&
\quad \text{modern first-order and splitting methods}.
\end{aligned}
}
\]

---

## Miscellaneous

The following books do not quite justify separate sections here, but I found them useful because they connect naturally with several of the subjects above.

### Sheldon Axler — *Linear Algebra Done Right*

[Book website](https://linear.axler.net/)

This is the linear algebra book I would recommend after a first computational course.

Axler emphasizes linear maps, invariant subspaces, eigenvalues, operators, and inner-product spaces rather than matrix manipulation.

For someone interested in analysis, one particularly attractive feature is that much of the operator theory can be regarded as a finite-dimensional prototype of what later happens in functional analysis.

For example,

\[
\text{finite-dimensional spectral theory}
\longrightarrow
\text{spectral theory on Hilbert spaces}.
\]

In this sense, many ideas in *Linear Algebra Done Right* reappear in infinite-dimensional form in Axler's *Measure, Integration & Real Analysis*.

### Gerald Teschl — *Ordinary Differential Equations and Dynamical Systems*

This is a very good introduction to ODE from a mathematical rather than purely computational viewpoint.

I particularly like the idea that an ODE

\[
\dot x=f(x)
\]

defines a flow

\[
x(t)=\Phi_t(x_0),
\]

so that differential equations naturally lead to dynamical systems.

Questions about solutions then become questions about trajectories, equilibria, stability, invariant sets, and long-time behavior.

Conceptually,

\[
\boxed{
\text{ODE}
\longrightarrow
\text{flow}
\longrightarrow
\text{dynamical system}.
}
\]

Knapp's *Basic Real Analysis* also contains a useful treatment of ODEs.

### William E. Boyce, Richard C. DiPrima, and Douglas B. Meade — *Elementary Differential Equations and Boundary Value Problems*

This is a much more elementary and computational differential equations book, but I think its treatment of boundary-value problems and Sturm–Liouville theory remains very useful.

A typical Sturm–Liouville problem has the form

\[
-\frac{d}{dx}
\left(
p(x)\frac{du}{dx}
\right)
+
q(x)u
=
\lambda w(x)u,
\]

together with suitable boundary conditions.

Even in one dimension, this already contains many of the structures that later reappear in elliptic PDE:

\[
\text{differential operator}
+
\text{boundary conditions}
+
\text{eigenvalues and eigenfunctions}.
\]

The resulting eigenfunctions lead naturally to orthogonal expansions and spectral decompositions.

I therefore like to think of Sturm–Liouville theory as a one-dimensional prototype of the spectral theory of elliptic operators:

\[
\text{Sturm–Liouville}
\longrightarrow
\text{self-adjoint operators}
\longrightarrow
\text{spectral theory}
\longrightarrow
\text{elliptic PDE}.
\]

---

## A Rough Map

These subjects are not really independent. Taken together, the books above form something like the following picture:

\[
\begin{array}{ccccc}
& \text{Real Analysis} & & \\
\swarrow & \downarrow & \searrow & \\
\text{Fourier Analysis}
&
\text{Functional Analysis}
&
\text{Probability}
\\
\downarrow
&
\downarrow
&
\downarrow
\\
\text{Harmonic / PDE}
&
\text{Distributions}
&
\text{Stochastic Analysis}
\\
\searrow
&
\downarrow
&
\swarrow
\\
&
\text{PDE / Optimization / Optimal Transport}.
&
\end{array}
\]

Of course, this is only one possible route through mathematics, and it reflects my own interests very strongly.

But this is also why I find these books worth recommending together. They do not merely teach isolated subjects. They gradually reveal how much of modern applied analysis is built from a relatively small collection of recurring ideas:

\[
\boxed{
\text{measure}
+
\text{topology}
+
\text{linearity}
+
\text{compactness}
+
\text{duality}
+
\text{dynamics}.
}
\]

Once these ideas begin to recur across real analysis, probability, PDE, Fourier analysis, and optimization, the boundaries between the subjects become much less important.
