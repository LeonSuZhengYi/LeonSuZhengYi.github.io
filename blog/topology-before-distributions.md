---
title: "Topology Before Distributions: Constructing the Test Function Spaces"
date: 2026-11-03
description: "A reading essay on locally convex spaces, seminorms, and the topology of test functions: why local smoothness is not enough, and how an inductive limit controls compact support."
slug: topology-before-distributions
draft: false
---

# Topology Before Distributions: Constructing the Test Function Spaces

*Notes on Appendix B of Claude Warnick's Fourier Analysis and Theory of Distributions, with supplements from Rudin's Functional Analysis and Eduard A. Nigsch's Locally Convex Spaces.*

A distribution is a continuous linear functional on a space of test functions. The linearity is easy to state. The continuity hides a substantial part of the construction: **which topology should the test function space carry, and why that topology?**

I wanted to understand this before returning to distribution theory. Knowing the usual convergence criterion for test functions was not quite enough. Why must a convergent sequence have a common compact support? Why can we not simply use the topology of smooth functions? And why does the correct construction involve the *finest* locally convex topology, when weak topologies are usually introduced as the *coarsest* ones satisfying a continuity requirement?

The question I kept returning to while reading Appendix B of Warnick's notes was how to construct the topology in the first place:

**Given a vector space and the analysis we want to do, how should we choose its topology?**

There are two stages to this question. First, how much of a vector topology can be specified by the geometry of neighborhoods of zero, or by the maps we want to make continuous? Second, when familiar constructions fail on a particular function space, what tells us how to change the topology?

The space of compactly supported smooth functions brings these questions together. I will first try the topology inherited from smooth functions, then a stronger topology controlling derivatives globally. Both attempts leave a Cauchy sequence whose limit has lost compact support. Understanding what these attempts fail to detect leads to the locally convex inductive limit

\[
\mathcal D(\Omega)=C_c^\infty(\Omega)
=\underset{K\Subset\Omega}{\operatorname{ind\,lim}}\,\mathcal D_K.
\]

Here and below, \(\Omega\subseteq\mathbb R^d\) is nonempty and open, \(d\ge1\), and \(K\Subset\Omega\) means that \(K\) is a compact subset of \(\Omega\). The holomorphic and Schwartz spaces below are parallel examples I found helpful; they are not all developed in that appendix.

Lecture notes: [Claude Warnick, *Fourier Analysis and Theory of Distributions* (PDF)](https://www.dpmms.cam.ac.uk/~cmw50/resources/M3P18/M3P18.pdf), Appendix B.

## 1. What survives when there is no single norm?

A norm provides several things at once: a topology, a notion of boundedness, and a way to discuss Cauchy sequences and completeness. In spaces such as \(C^\infty(\Omega)\), the natural convergence involves all derivatives on all compact subsets. A single norm is no longer the obvious starting point.

What I want to preserve is the ability to do analysis: take limits, pass continuous linear operations through them, and distinguish bounded or Cauchy families. This suggests keeping the vector operations and asking how little extra structure is needed to make these ideas meaningful. We can then choose a topology adapted to the functions under consideration, rather than first searching for a norm.

A **topological vector space** retains the vector space operations and requires

\[
+:X\times X\longrightarrow X,
\qquad
\mathbb F\times X\longrightarrow X,\quad (\lambda,x)\longmapsto\lambda x
\]

to be jointly continuous, where \(\mathbb F=\mathbb R\) or \(\mathbb C\) has its usual topology. I will not include Hausdorffness in the definition; when needed, I will state it separately.

Translations and multiplication by a fixed nonzero scalar are then homeomorphisms:

\[
x\longmapsto x+a,
\qquad x\longmapsto\lambda x\quad(\lambda\ne0).
\]

But these homeomorphisms alone do not guarantee the TVS axioms. For example, the discrete metric on \(\mathbb R\) is translation invariant, and every nonzero scalar multiplication is a homeomorphism. Nevertheless,

\[
\lambda_n\to0\text{ in the usual scalar topology}
\quad\not\Longrightarrow\quad
\lambda_n\cdot1\to0\text{ in the discrete topology}.
\]

Thus even a translation-invariant metric does not automatically produce a TVS. Compatibility must include the continuous variation of the scalar parameter. Translation invariance of a metric does ensure continuity of addition, by its triangle inequality; scalar multiplication is the missing issue in this example.

The vector space structure also strengthens some general topological facts. For a TVS,

\[
T_1\iff T_2.
\]

Indeed, if \(x\ne0\), closedness of \(\{x\}\) gives a zero-neighborhood \(U\) avoiding \(x\). Choose a smaller zero-neighborhood \(V\) with \(V-V\subseteq U\). Then \(V\) and \(x+V\) are disjoint.

Boundedness has an intrinsic formulation as well:

\[
B\subseteq X\text{ is bounded}
\iff
\forall U\in\mathcal N(0),\ \exists R>0:\
B\subseteq tU\quad(t\ge R).
\]

The set must be absorbed uniformly by every zero-neighborhood. This is a property of the vector topology, not of a chosen compatible metric.

Similarly,

\[
(x_n)\text{ is Cauchy}
\iff
\forall U\in\mathcal N(0),\ \exists N:\
x_n-x_m\in U\quad(n,m\ge N).
\]

For general TVS, completeness is formulated using Cauchy nets or filters. Convergence of all Cauchy sequences is only *sequential completeness*. The distinction will matter once \(\mathcal D\) ceases to be metrizable.

## 2. Why the construction reduces to neighborhoods of zero

For an ordinary topological space, open local bases at all points recover a base for the topology. In a TVS, translations supply every local base from the one at zero:

\[
\mathcal B=\{x+U:x\in X,\ U\in\mathcal B_0\},
\]

where \(\mathcal B_0\) is an open local base at zero.

There is a small convention worth keeping explicit. A neighborhood of \(x\) need only *contain* an open set containing \(x\); it need not itself be open. A local base can therefore consist of nonopen neighborhoods. The displayed formula gives an open base directly when its members \(U\) are open. With arbitrary neighborhood bases, one can first pass to interiors.

This is the first useful reduction of the construction problem. A topology initially looks like an enormous collection of subsets. Local bases replace it with tests for being sufficiently close to each point, and translation reduces all those tests to the origin. If we know what it means for a difference \(x-y\) to be small, we know the local structure everywhere.

Thus, instead of prescribing every open set, we can ask:

**Which families of subsets of a vector space can serve as the neighborhoods of zero?**

The answer must encode the vector operations. Continuity of addition requires sufficiently small neighborhoods \(V\) satisfying

\[
V+V\subseteq U.
\]

Continuity of scalar multiplication supplies two useful geometric properties:

\[
\begin{aligned}
U\text{ balanced}&\iff \lambda U\subseteq U\quad(|\lambda|\le1),\\
U\text{ absorbing}&\iff \forall x\in X,\ \exists R>0:\ x\in tU\quad(t\ge R).
\end{aligned}
\]

Every zero-neighborhood is absorbing, and every zero-neighborhood contains a balanced open zero-neighborhood. A TVS is **locally convex** if zero has a base of convex neighborhoods; this base can be chosen convex, balanced, and open.

Convexity makes addition particularly transparent:

\[
\tfrac12U+\tfrac12U\subseteq U.
\]

The geometric conditions are useful because they express the operations we want to perform on small errors: add them, shrink them, and compare their sizes. Convexity will let us turn this geometry into numerical estimates. Before doing so, there is another way to formulate the construction problem.

### Choosing a topology by choosing continuous maps

For a map \(f:X\to Y\), continuity asks that each inverse image \(f^{-1}(V)\), with \(V\) open in \(Y\), be open in \(X\). Consequently, refining the topology on the **domain** preserves every previously continuous map and may make additional maps continuous. Refining the topology on the **codomain** imposes additional requirements on continuity.

This gives a second way to design a topology. If certain maps \(f_i:X\to Y_i\) are the observations we want to make, we can require all their inverse images of open sets to be open, then take the topology they generate. This is the initial topology: the coarsest topology making all the prescribed observations continuous.

In particular, a topology can be specified through the information we want to observe continuously. Weak topologies do this with linear functionals. For spaces of smooth functions, the natural observations include sizes of derivatives on compact sets. This suggests seminorms.

The direction of refinement will become important again for \(\mathcal D\). A finer vector topology has more zero-neighborhoods and therefore more ways to test smallness. A neighborhood base for it must refine the neighborhoods of the coarser topology. Here “more control” refers to these additional, potentially smaller neighborhoods; it does not mean larger sets or a larger cardinality for every possible choice of base.

## 3. Seminorms and convex neighborhoods describe the same structure

A seminorm measures size without necessarily detecting every nonzero vector. That is often exactly what one observation should do. For example, \(\sup_K|f|\) deliberately ignores everything outside \(K\), while another seminorm can inspect derivatives or a different compact set. A family of such observations can jointly detect what each one misses.

Given a family \(\mathcal P\) of seminorms on \(X\), use the sets

\[
U(p_1,\ldots,p_m;\varepsilon_1,\ldots,\varepsilon_m)
=\bigcap_{j=1}^m\{x:p_j(x)<\varepsilon_j\}
\]

as an open local base at zero. Their translates generate a locally convex topology \(\tau_{\mathcal P}\). The inequalities

\[
p(x+y)\le p(x)+p(y),\qquad
p(\lambda x)=|\lambda|p(x),\qquad
|p(x)-p(y)|\le p(x-y)
\]

give continuity of addition, scalar multiplication, and each seminorm.

For example, joint continuity of scalar multiplication follows from

\[
p(\lambda x-\lambda_0x_0)
\le |\lambda|p(x-x_0)+|\lambda-\lambda_0|p(x_0).
\]

This provides a way to build locally convex topologies. But it leaves the geometric question from the previous section: given a suitable neighborhood, can we manufacture a seminorm for which it is a unit ball?

The reverse construction answers this by measuring size through dilation. For a convex, balanced, absorbing set \(U\), ask how much we must enlarge \(U\) before it contains a given vector \(x\). This leads to its **Minkowski functional**

\[
p_U(x)=\inf\{t>0:x\in tU\}.
\]

Each geometric hypothesis now has a purpose. Absorption makes the measurement finite in every direction. Balancedness makes it compatible with scalar magnitude, giving absolute homogeneity. Convexity makes the measurement compatible with addition, giving subadditivity: if \(x\in aU\), \(y\in bU\), then

\[
\frac{x+y}{a+b}
=\frac a{a+b}\frac xa+\frac b{a+b}\frac yb\in U.
\]

For a convex balanced **open** zero-neighborhood, the gauge recovers the set exactly:

\[
\boxed{U=\{x:p_U(x)<1\}.}
\]

One inclusion uses balancedness. For the other, openness and continuity of \(t\mapsto tx\) imply that \(x\in U\) can be moved slightly farther along its ray while remaining in \(U\). Thus \(x\in tU\) for some \(t<1\).

This exact recovery is the crucial point. Constructing some seminorm from \(U\) would not yet explain the topology. Recovering \(U\) as its open unit ball means that replacing neighborhoods by gauges loses none of the original local information. Taking the gauges of an open convex balanced neighborhood base therefore recovers the original topology:

\[
\boxed{\text{locally convex topology}
\quad\longleftrightarrow\quad
\text{topology generated by seminorms}.}
\]

This is also a constructive answer to the question in the previous section. Starting from convex balanced absorbing sets, their gauges always generate a locally convex topology. To assert that the *original family itself* is a neighborhood base, one additionally needs the appropriate refinements under finite intersections and small dilations. Geometry alone, with no compatibility between the sets, is not enough.

### The connection with initial topologies

The weak topology \(\sigma(X,F)\) is the coarsest topology making a prescribed family of linear functionals \(F\) continuous. A seminorm topology has a closely related description, but one must keep the linear structure in view:

\[
\tau_{\mathcal P}
=\text{the coarsest TVS topology making every }p\in\mathcal P\text{ continuous}.
\]

It is not generally the ordinary initial topology of the nonlinear maps \(p:X\to\mathbb R\). For instance, the initial topology of \(x\mapsto|x|\) on \(\mathbb R\) cannot distinguish \(x\) from \(-x\).

A precise initial-topology description uses the linear quotient maps

\[
q_p:X\longrightarrow X/\ker p,
\qquad \|q_p(x)\|_p=p(x).
\]

Then \(\tau_{\mathcal P}\) is the initial topology induced by the maps \(q_p\) into these normed spaces. This formulation explains why translated seminorm balls, rather than just inverse images under the seminorms at zero, describe the topology.

## 4. Turning topology into usable estimates

The equivalence with seminorms makes the earlier generalization usable. We can ask whether the chosen observations distinguish points, whether countably many suffice to test convergence, and whether continuity can be expressed as an estimate. These become concrete versions of Hausdorffness, metrizability, and continuity of linear functionals.

First,

\[
\tau_{\mathcal P}\text{ is Hausdorff}
\iff
\bigcap_{p\in\mathcal P}\ker p=\{0\}.
\]

Second, for a Hausdorff locally convex space,

\[
\boxed{\begin{aligned}
\text{metrizable}
&\iff\text{first countable}\\
&\iff\text{its topology admits a countable generating family of seminorms}.
\end{aligned}}
\]

The last statement concerns the existence of a countable generating family, not the cardinality of any particular family initially presented. An uncountable collection may contain many redundant seminorms.

For a countable separating family \((p_n)\), one compatible translation-invariant metric is

\[
d(x,y)=\sum_{n=1}^{\infty}2^{-n}\min\{1,p_n(x-y)\}.
\]

Boundedness also becomes a family of estimates:

\[
B\text{ bounded}
\iff
\sup_{x\in B}p(x)<\infty\quad\text{for every }p\in\mathcal P.
\]

Most useful for distributions is the continuity criterion for a linear functional:

\[
\boxed{T\in X'
\iff
\exists p_1,\ldots,p_m\in\mathcal P,\ C>0:\
|T(x)|\le C\max_{1\le j\le m}p_j(x).}
\]

Continuity gives a basic zero-neighborhood on which \(|T|<1\), and scaling turns that neighborhood condition into the estimate. Conversely, the estimate immediately implies continuity. Infinite families define the topology, but any one continuous linear functional is controlled by finitely many of them.

Hahn–Banach connects these estimates back to geometry. In its analytic form, a linear functional dominated by a seminorm on a subspace extends with the same domination. In its geometric form, continuous linear functionals separate suitable convex sets; in particular, a point outside a closed convex set can be strictly separated from it in a Hausdorff locally convex space.

For example, if \(p(x)>0\), define on the line through \(x\)

\[
f_0(\lambda x)=\lambda p(x).
\]

Hahn–Banach extends this to \(f\in X'\) with \(|f(y)|\le p(y)\). Consequently, **within locally convex spaces**,

\[
X\text{ Hausdorff}\iff X'\text{ separates points}.
\]

The role of local convexity is now visible: it supplies both numerical control through seminorms and enough continuous linear functionals to detect the geometry. This is why these results belong before the function-space examples. They give us a procedure: select the observations, build the topology, and translate its analytic properties back into estimates. Later, the distribution estimate will come from precisely this procedure.

## 5. Smoothness, holomorphicity, and decay

The first test of this procedure is to start with a desired mode of convergence and ask whether it gives a satisfactory space for analysis. In \(\mathcal E\), the desired control is local smoothness; in \(\mathcal S\), it also includes decay; in \(\mathcal D_K\), the location of the support is fixed in advance. Their seminorms record these choices. Completeness and compactness then have to be proved from the chosen control.

### Smooth functions: local control of every derivative

Choose a compact exhaustion

\[
K_n\subseteq\operatorname{int}K_{n+1},\qquad
\bigcup_nK_n=\Omega,
\]

and put

\[
\mathcal E(\Omega)=C^\infty(\Omega),\qquad
p_n(f)=\max_{|\alpha|\le n}\sup_{x\in K_n}|D^\alpha f(x)|.
\]

These seminorms generate the topology of local uniform convergence of every derivative:

\[
f_j\to f\text{ in }\mathcal E
\iff
D^\alpha f_j\to D^\alpha f
\text{ uniformly on every compact subset, for every }\alpha.
\]

Completeness requires checking that the limits of the derivatives are actually derivatives of the limiting function. If \(D^\alpha f_j\to g_\alpha\) locally uniformly, pass to the limit in

\[
f_j(x+he_i)-f_j(x)=\int_0^h\partial_i f_j(x+te_i)\,dt
\]

on sufficiently small coordinate segments. This identifies \(\partial_i g_0=g_{e_i}\); iteration identifies all derivatives. Thus \(\mathcal E\) is a Fréchet space: complete, metrizable, and locally convex.

It also has the **Heine–Borel property**: closed bounded sets are compact. Boundedness controls every derivative on every compact; one further derivative supplies equicontinuity. Arzelà–Ascoli followed by a diagonal extraction gives convergence of all derivatives on all compact subsets.

This is a useful form of the principle that additional regularity creates compactness. Unlike a normed space with the Heine–Borel property, \(\mathcal E\) need not be finite dimensional.

### Holomorphic functions: the equation supplies derivative control

For \(\Omega\subseteq\mathbb C\), let \(\mathcal H(\Omega)\) carry the topology of locally uniform convergence. Cauchy estimates give, for suitable \(K\Subset\operatorname{int}L\Subset\Omega\),

\[
\sup_K|f^{(m)}|\le C_{K,L,m}\sup_L|f|.
\]

Thus, on holomorphic functions, local control of the function already controls all derivatives. The compact-open topology agrees with the topology inherited from \(\mathcal E(\Omega)\), and \(\mathcal H\) is a closed Fréchet subspace.

Its Heine–Borel property is the functional-analytic version of Montel's theorem. Here holomorphicity supplies the extra regularity that had to be explicitly included among the seminorms of \(\mathcal E\).

### Schwartz functions: control at infinity as well

For \(\mathcal S(\mathbb R^d)\), use the increasing seminorms

\[
s_N(f)=\max_{|\alpha|\le N}
\sup_{x\in\mathbb R^d}(1+|x|)^N|D^\alpha f(x)|,
\qquad N=0,1,\ldots.
\]

They are equivalent to the usual family \(\sup_x|x^\beta D^\alpha f(x)|\). The topology controls both smoothness and decay. The same local limit argument as for \(\mathcal E\), together with the weighted bounds, proves completeness.

The Heine–Borel argument needs an extra step. From a bounded sequence in \(\mathcal S\), local compactness gives a subsequence converging in \(\mathcal E\). To upgrade this to convergence in \(\mathcal S\), split space into a ball and its complement. For the difference \(h\) of two members of the subsequence,

\[
\max_{|\alpha|\le N}\sup_{|x|>R}
(1+|x|)^N|D^\alpha h(x)|
\le\frac{s_{N+1}(h)}{1+R}.
\]

The right side is uniformly small for large \(R\); inside the ball, local convergence applies. Therefore closed bounded subsets of \(\mathcal S\) are compact.

The embedding \(\mathcal S\hookrightarrow\mathcal E\) alone would not prove this. It supplies local convergence, while the additional weights control the tails.

### Fixed compact support

For a fixed \(K\Subset\Omega\), set

\[
\mathcal D_K=\{f\in\mathcal E(\Omega):\operatorname{supp}f\subseteq K\}.
\]

It is a closed subspace of \(\mathcal E\), since

\[
\mathcal D_K=\bigcap_{x\in\Omega\setminus K}\ker\delta_x,
\qquad \delta_x(f)=f(x).
\]

It is therefore Fréchet and has the Heine–Borel property. Its topology can be generated by

\[
q_m(f)=\max_{|\alpha|\le m}\sup_{x\in\Omega}|D^\alpha f(x)|,
\]

restricted to \(\mathcal D_K\). Since the support is fixed, global and local derivative control agree there.

At this point the same construction method has worked repeatedly: identify the function properties we want to control and express them by countably many seminorms. It is reasonable to try it again for compactly supported functions. The new difficulty is that compact support says there exists *some* compact set containing the support, without specifying which one. We must understand what happens as that set varies along a sequence.

## 6. Two natural topologies on \(\mathcal D\), and why they fail

Algebraically,

\[
\mathcal D(\Omega)=\bigcup_{K\Subset\Omega}\mathcal D_K.
\]

Since these functions are smooth, the first candidate is the topology inherited from \(\mathcal E(\Omega)\). This already gives a Hausdorff metrizable locally convex space. What is uncertain is whether its notion of smallness respects the extra condition defining \(\mathcal D\): will a Cauchy sequence still have a compactly supported limit?

Take \(\Omega=\mathbb R\), choose a nonzero \(\varphi\in C_c^\infty((0,1))\), and let

\[
f_m(x)=\sum_{j=1}^m\frac1j\varphi(x-j).
\]

On every fixed compact interval the sum eventually stops changing. Hence \((f_m)\) is Cauchy in the inherited topology and converges in \(\mathcal E\) to

\[
f(x)=\sum_{j=1}^\infty\frac1j\varphi(x-j).
\]

The sum is locally finite, so \(f\) is smooth. Its support is not compact, so it is not in \(\mathcal D\).

The problem is **escape of support**. Local control cannot detect what is being added outside the compact set currently under observation. A basic neighborhood inherited from \(\mathcal E\) inspects only finitely many derivative bounds on finitely many compact sets. A bump outside their union satisfies all these tests, however large it is.

We could accept the limit by enlarging the underlying space, but then we would no longer be constructing the space of compactly supported test functions. Keeping that vector space makes us reconsider its topology. The failure points toward a finer topology, with additional neighborhoods able to detect what the local tests miss. Incompleteness motivates this change; it does not by itself prescribe a unique replacement.

The most immediate repair is to remove the localization: replace bounds on each compact set by bounds on the entire domain. Use the global seminorms \(q_m\) above on all of \(\mathcal D\), and denote the resulting topology by \(\tau_{\mathcal Q}\). Now convergence means uniform convergence of every derivative on the entire domain. A bump can no longer become invisible merely by moving away.

This topology is finer, but the same example still defeats completeness. Because the translated bumps have disjoint supports, for \(m>n\),

\[
q_k(f_m-f_n)\le\frac1{n+1}q_k(\varphi)\longrightarrow0.
\]

The bumps become small enough to escape even global derivative control. These seminorms observe their amplitudes and derivatives everywhere, but impose the same tolerances at every location. Moving a bump far away costs nothing extra, so reducing its amplitude can still make it arbitrarily small in this topology.

Yet \(\tau_{\mathcal Q}\) already induces exactly the correct Fréchet topology on every \(\mathcal D_K\). This is an important obstruction:

**Correct topology on every fixed-support subspace does not by itself determine the right topology on their union.**

We need a topology that can detect where small pieces of a function are located, with arbitrarily strong penalties as their locations leave compact subsets. Such penalties can still be harmless on each fixed \(\mathcal D_K\). This suggests keeping those spaces as the constraint on how far we are allowed to refine the topology on their union.

### The same failure seen through linear functionals

The continuity viewpoint gives another reason to refine the topology. On \(\mathbb R\), a locally finite sum of weighted point evaluations should define a distribution:

\[
T(f)=\sum_{j=1}^{\infty}j f(j+a),\qquad 0<a<1.
\]

For any compactly supported \(f\), only finitely many terms occur. On each \(\mathcal D_K\), this is a finite sum of continuous evaluations. But choose the bump above with \(\varphi(a)=1\), and put \(h_j=\varphi(\cdot-j)/j\). Then

\[
q_m(h_j)\to0\quad\text{for every }m,
\qquad T(h_j)=1.
\]

Thus \(T\) is not continuous for \(\tau_{\mathcal Q}\). The difficulty appears both in the Cauchy sequences this topology allows and in the locally legitimate functionals it excludes. Refining the topology can address both: it strengthens the tests for convergence and makes more outgoing linear maps continuous.

## 7. Why take the finest compatible locally convex topology?

The two failed attempts suggest seeking more control, but we need to say which refinements are allowed. Each fixed-support space already has a satisfactory topology. We want convergence there to remain convergence in the union, so require every inclusion

\[
i_K:\mathcal D_K\hookrightarrow\mathcal D
\]

to be continuous. Equivalently, if we declare a set open in \(\mathcal D\), its intersection with every \(\mathcal D_K\) must be open there. This requirement places an upper bound on how fine our topology can become.

Local convexity supplies the other constraint: it retains the neighborhood geometry, seminorm descriptions, and separation results developed earlier. Within these constraints, we can ask for all the available control at once:

**Which is the finest locally convex topology that still makes every fixed-support inclusion continuous?**

This is a choice motivated by the failures above, whose consequences must still be checked. In particular, the word “finest” does not establish completeness on its own. What it does give is a precise construction problem and a way to ensure that every locally legitimate seminorm is available. The bounded-set theorem below will show that this is enough to control support escape.

There is also an outgoing-map interpretation. We have just found a functional whose restrictions to all the \(\mathcal D_K\) are continuous, but which is excluded by the global-seminorm topology. We would like such piecewise continuous linear maps to be continuous on the union. The finest property will yield exactly this principle, for maps into any locally convex target.

### Merge all admissible local bases

The most direct topological approach I found was to collect all the local structures we are allowed to use. Define the family of admissible topologies by

\[
\Gamma=\left\{\tau:
\begin{array}{l}
\tau\text{ is a Hausdorff locally convex topology on }\mathcal D,\\
i_K:(\mathcal D_K,\tau_K)\hookrightarrow(\mathcal D,\tau)
\text{ is continuous}\\
\text{for every }K\Subset\Omega
\end{array}\right\}.
\]

This family is nonempty: the topology inherited from \(\mathcal E\), and the topology \(\tau_{\mathcal Q}\), are already examples.

For each \(\tau\in\Gamma\), take its family \(\mathcal C_\tau\) of all convex balanced open zero-neighborhoods, and form

\[
\mathcal B_* = \bigcup_{\tau\in\Gamma}\mathcal C_\tau.
\]

Any convex balanced open zero-neighborhood allowed by one admissible topology should be available in the final construction. Taking all such neighborhoods lets us combine the tests supplied by different topologies.

To check that two such tests can be used together, take \(\tau_1,\tau_2\in\Gamma\) and generate a topology using both of their continuous seminorm families. This topology, denoted \(\tau_1\vee\tau_2\), is still admissible: every seminorm we added is continuous on each \(\mathcal D_K\). Thus if \(U\in\mathcal C_{\tau_1}\) and \(V\in\mathcal C_{\tau_2}\), their intersection is a convex balanced open zero-neighborhood in \(\tau_1\vee\tau_2\), so \(U\cap V\in\mathcal B_*\).

The other local conditions are inherited from whichever admissible topology supplies the neighborhood: small dilations, refinement for addition, and an open neighborhood around each of its points. Thus \(\mathcal B_*\) generates a locally convex vector topology. Each basic neighborhood has open intersection with every \(\mathcal D_K\), so every inclusion remains continuous. The resulting topology contains the local information of every member of \(\Gamma\), and therefore is the finest one. Denote it by \(\tau_{\mathcal D}\).

This construction does not require guessing a special formula for the neighborhoods of \(\mathcal D\). It starts with the allowable topologies and combines their local bases. One can equally use the union of their full neighborhood systems. The finite-join argument is what makes this union legitimate; an ordinary union of topologies need not itself be a topology.

### Recognize all the possible basic neighborhoods

Having constructed the extremal topology abstractly, we can ask what a convex balanced open zero-neighborhood is allowed to look like. Continuity of every \(i_K\) forces its intersection with each \(\mathcal D_K\) to be open. This gives the concrete family used by Warnick and Rudin:

\[
\mathcal B_{\mathcal D}
=\left\{W\subseteq\mathcal D:
\begin{array}{l}
0\in W,\quad W\text{ convex and balanced},\\
W\cap\mathcal D_K\text{ open in }\mathcal D_K
\text{ for every }K\Subset\Omega
\end{array}\right\}.
\]

At this stage of the concrete construction, these are *candidates* for neighborhoods. Calling them neighborhoods in advance would assume the topology we are trying to build. The question is whether every such candidate can actually be admitted.

Here the Minkowski construction returns. Each \(W\) is absorbing, because a given \(f\) lies in some \(\mathcal D_K\), where \(W\cap\mathcal D_K\) is a zero-neighborhood. Its gauge satisfies

\[
p_W|_{\mathcal D_K}=p_{W\cap\mathcal D_K},
\qquad W=\{f:p_W(f)<1\}.
\]

The first identity shows continuity of the gauge on every fixed-support space. The second follows by recovering the open gauge ball on whichever \(\mathcal D_K\) contains the function. Adjoining \(p_W\) to \(\tau_{\mathcal Q}\) therefore produces an admissible Hausdorff locally convex topology in which \(W\) is open. Thus \(W\in\mathcal B_*\).

Conversely, every member of \(\mathcal B_*\) satisfies the displayed conditions. Hence these two neighborhood constructions agree. The concrete definition is collecting every possible convex balanced open zero-neighborhood consistent with the inclusions. This is why it has the finest property.

### Express the same choice through seminorms

The numerical version is now immediate. Define

\[
\mathcal P_{\mathrm{ind}}
=\{p:p\text{ is a seminorm on }\mathcal D,
\quad p|_{\mathcal D_K}\text{ is continuous for every }K\Subset\Omega\}.
\]

Generating a topology with this entire family preserves continuity of each \(i_K\). Conversely, every continuous seminorm for any admissible locally convex topology belongs to this family. It therefore generates \(\tau_{\mathcal D}\) as well. The seminorm \(q_0(f)=\|f\|_\infty\) separates points, so the resulting topology is Hausdorff.

### Why an uncountable family is essential here

There is an important change from the preceding examples. The topologies of \(\mathcal E\), \(\mathcal H\), \(\mathcal S\), and each \(\mathcal D_K\) admit **countable** generating families of seminorms. So does the failed topology \(\tau_{\mathcal Q}\). Finite intersections of their balls with positive rational radii give countable local bases at zero.

For \(\tau_{\mathcal D}\), we collect an **uncountable** family of compatible seminorms. Moreover, this family cannot be replaced by any countable generating family: \(\mathcal D\) has no countable local base at zero. Section 10 proves this by constructing escaping bumps from any proposed countable base. In the terminology of Section 4, countability genuinely fails here; this is stronger than merely displaying an uncountable family that might contain redundant seminorms.

The extra freedom is concrete. Fix distinct points \(x_j\in\Omega\) leaving every compact subset. For every sequence of positive tolerances \(\varepsilon=(\varepsilon_j)\), we may use

\[
p_\varepsilon(f)=\sup_{j\ge1}\frac{|f(x_j)|}{\varepsilon_j},
\qquad \varepsilon\in(0,\infty)^{\mathbb N}.
\]

Each test function encounters only finitely many of these points, and each \(\mathcal D_K\) sees only finitely many evaluations. Hence every \(p_\varepsilon\) is a compatible seminorm. The uncountably many choices of \(\varepsilon\) allow independent tolerances at the escaping locations. Section 9 uses precisely this freedom to detect a proposed bounded set whose supports escape.

Thus the inductive construction retains the seminorm description of a locally convex topology, while giving up the countable control available in the earlier examples.

This is the **locally convex inductive limit topology**. The restriction to locally convex topologies is part of the construction; the final topology in the category of arbitrary topological spaces is a different construction and need not coincide with it.

### Do the fixed-support topologies remain unchanged?

Continuity of \(i_K\) gives

\[
\tau_{\mathcal D}|_{\mathcal D_K}\subseteq\tau_K.
\]

For the reverse inclusion, observe that every global derivative seminorm \(q_m\) belongs to \(\mathcal P_{\mathrm{ind}}\). Its restriction to \(\mathcal D_K\) generates \(\tau_K\). Therefore

\[
\boxed{\tau_{\mathcal D}|_{\mathcal D_K}=\tau_K.}
\]

So the construction preserves exactly the local pieces with which we started.

## 8. Why the finest property becomes a universal property

We chose a finer domain topology partly to permit more outgoing linear maps. The finest property says we have included every refinement compatible with the fixed-support inclusions. Now suppose a linear map is already continuous on each of those pieces. Could it still fail to be continuous on their union?

If it did, making it continuous would suggest a further refinement. But its continuity on each piece says precisely that this refinement would preserve all the inclusions. Maximality should therefore force the map to be continuous already. This is the motivation for the universal property: for every locally convex space \(Y\) and linear map \(T:\mathcal D\to Y\),

\[
\boxed{T\text{ continuous}
\iff
T|_{\mathcal D_K}\text{ continuous for every }K\Subset\Omega.}
\]

The forward implication follows by composition with \(i_K\).

For the reverse implication, let \(r\) be a continuous seminorm on \(Y\). Then \(r\circ T\) is a seminorm on \(\mathcal D\), and all its restrictions to \(\mathcal D_K\) are continuous. Thus \(r\circ T\in\mathcal P_{\mathrm{ind}}\), so it is continuous on \(\mathcal D\). Since this holds for every continuous seminorm of \(Y\), the map \(T\) is continuous.

This also makes the maximality argument precise: adjoining the seminorms \(r\circ T\) would give a finer locally convex topology still making every \(i_K\) continuous. Since the original topology was already finest, these additions cannot change it. Thus \(T\) was continuous already.

Conversely, suppose an admissible locally convex topology has this universal property. Given any other admissible topology \(\sigma\), apply the property to

\[
\operatorname{id}:\mathcal D\longrightarrow(\mathcal D,\sigma).
\]

All its restrictions are continuous, so the identity is continuous. The original topology is therefore finer than \(\sigma\). This recovers the finest property.

It helps to compare the two constructions in this essay directly. For \(\mathcal E\), we specified derivative seminorms on compact sets and took the coarsest vector topology making those measurements continuous. For \(\mathcal D\), the topologies of the pieces \(\mathcal D_K\) were already fixed. We kept their inclusions continuous and took the finest locally convex topology allowed by that requirement. Its useful consequence is the displayed test: to check a linear operation on test functions, we can check it separately on each fixed-support space.

## 9. How the topology detects escaping support

We can now return to the failed constructions with a more specific question. The global derivative seminorms treated all locations alike. The new topology permits any seminorm continuous on every fixed-support space. Can we use that freedom to place successively stronger restrictions at locations leaving compact subsets, while each \(\mathcal D_K\) sees only finitely many of them?

This is the mechanism behind the decisive result:

\[
\boxed{\begin{aligned}
B\subseteq\mathcal D\text{ bounded}
\iff\;&\exists K\Subset\Omega:\ B\subseteq\mathcal D_K,\\
&\sup_{f\in B}q_m(f)<\infty\quad\text{for every }m.
\end{aligned}}
\]

The common-support assertion is the important part. To see how to prove it, suppose \(B\) has escaping support. We want to construct a continuous seminorm unbounded on \(B\), contradicting its boundedness. The escaping locations tell us where to measure, and the function values there tell us how severe the penalties should be.

Choose an exhaustion \((K_j)\), functions \(f_j\in B\), and points \(x_j\notin K_j\) such that

\[
f_j(x_j)\ne0.
\]

Such points can be chosen because \(\operatorname{supp}f_j\not\subseteq K_j\) and \(K_j\) is closed. The points \(x_j\) leave every compact subset of \(\Omega\). We choose the tolerance at \(x_j\) small enough that \(f_j\) violates it by a factor of \(j\):

\[
\varepsilon_j=\frac{|f_j(x_j)|}{j},
\qquad
p(f)=\sup_{j\ge1}\frac{|f(x_j)|}{\varepsilon_j}.
\]

For each test function \(f\), only finitely many terms are nonzero, so \(p(f)<\infty\). On any fixed \(\mathcal D_K\), it is a maximum of finitely many continuous point evaluations. Thus

\[
p\in\mathcal P_{\mathrm{ind}}.
\]

But \(p(f_j)\ge j\), so \(p\) is unbounded on \(B\), contradicting boundedness.

Equivalently, the neighborhood

\[
W=\{f:|f(x_j)|<\varepsilon_j\text{ for every }j\}
\]

imposes arbitrarily small tolerances at locations leaving compact subsets. Every fixed-support space sees only finitely many of these restrictions, so its topology is undisturbed. Their collective effect on \(\mathcal D\) rules out support escape in bounded sets.

Once \(B\subseteq\mathcal D_K\), the remaining derivative bounds follow from boundedness and the continuous seminorms \(q_m\). Conversely, a set satisfying those bounds is bounded in \(\mathcal D_K\), hence bounded in \(\mathcal D\) by the continuous inclusion.

This proof explains what global derivative seminorms were missing. Small amplitude can compensate for escape in each \(q_m\); the inductive topology allows a seminorm whose spatial penalties are chosen to defeat that particular escape.

## 10. Convergence, compactness, and the cost of the construction

Every convergent sequence, and every Cauchy sequence, is bounded in a TVS. The bounded-set theorem therefore reduces their behavior in \(\mathcal D\) to one fixed-support Fréchet space:

\[
\boxed{\begin{aligned}
f_j\to f\text{ in }\mathcal D
\iff\;&\exists K\Subset\Omega:\ f_j,f\in\mathcal D_K\text{ for every }j,\\
&q_m(f_j-f)\to0\quad\text{for every }m.
\end{aligned}}
\]

The familiar test-function convergence criterion has now been derived from a topology, rather than imposed separately.

A Cauchy sequence similarly lies in a single \(\mathcal D_K\), where it converges by completeness. Closed bounded sets lie in a single \(\mathcal D_K\) and are compact there, hence compact in \(\mathcal D\). Thus \(\mathcal D\) is sequentially complete and has the Heine–Borel property.

There is also a stronger standard conclusion. Along a compact exhaustion,

\[
\mathcal D=\operatorname{ind\,lim}_n\mathcal D_{K_n}
\]

is a **strict LF-space**: a countable locally convex inductive limit of Fréchet spaces whose inclusions are closed topological embeddings. The completeness theorem for strict LF-limits yields full completeness. This last conclusion uses an additional theorem; the Cauchy-sequence argument alone proves only sequential completeness.

The countability here refers to the list of fixed-support spaces \(\mathcal D_{K_n}\). It does not give a countable generating family of seminorms on their union: a compatible seminorm can impose different bounds at every step, and the inductive topology includes all these choices.

The cost is that \(\mathcal D\) is not metrizable. Suppose it had a countable zero-neighborhood base, made decreasing by taking finite intersections:

\[
U_1\supseteq U_2\supseteq\cdots.
\]

For each \(n\), choose a nonzero bump \(\psi_n\) supported in \(\Omega\setminus K_n\). Absorption lets us choose \(a_n\ne0\) sufficiently small that

\[
a_n\psi_n\in U_n.
\]

Then \(a_n\psi_n\to0\) by the base property. Yet the sequence has no common compact support, contradicting the convergence criterion. Therefore \(\mathcal D\) is not first countable and hence not metrizable.

The same support mechanism explains both outcomes: it forces bounded sets into one fixed-support space, but cannot be enforced by any countable neighborhood base.

There is a useful compensation. For **linear** maps \(T:\mathcal D\to Y\) into a locally convex space, the following are equivalent:

\[
\begin{gathered}
T\text{ continuous};\qquad
T\text{ maps bounded sets to bounded sets};\\
T\text{ sequentially continuous};\qquad
T|_{\mathcal D_K}\text{ continuous for every }K.
\end{gathered}
\]

For example, sequential continuity restricts to sequential continuity on each metrizable \(\mathcal D_K\), hence continuity there; the universal property then gives continuity on \(\mathcal D\). For the boundedness implication, use the Fréchet-space fact that a null sequence \(f_j\) in a fixed \(\mathcal D_K\) can be rescaled by numbers \(b_j\to\infty\) slowly enough that \(b_jf_j\to0\). Boundedness of \(T\) then gives \(T f_j=b_j^{-1}T(b_jf_j)\to0\).

This explains why distribution theory can often work with sequences despite the nonmetrizability of its test function space. It is a special fact about these linear maps, not a general replacement of topological continuity by sequential continuity.

## 11. The topology finally becomes a distribution estimate

Define

\[
\mathcal D'(\Omega)=\bigl(\mathcal D(\Omega)\bigr)'.
\]

Combining the universal property with the seminorm criterion for linear functionals gives

\[
\boxed{\begin{aligned}
T\in\mathcal D'(\Omega)
\iff\;&\forall K\Subset\Omega,\ \exists C_K>0,\ m_K\in\mathbb N_0:\\
&|\langle T,\varphi\rangle|
\le C_K\max_{|\alpha|\le m_K}\|D^\alpha\varphi\|_\infty,
\quad\varphi\in\mathcal D_K.
\end{aligned}}
\]

The derivative order may depend on \(K\). A distribution has finite order on each fixed compact set, but there need not be one finite order valid throughout the domain.

This closes the circle with the earlier continuity criterion. On a seminorm space, one continuous linear functional is controlled by finitely many seminorms. On each \(\mathcal D_K\), those become finitely many derivative bounds. The universal property then combines these local estimates into continuity on \(\mathcal D\). The order and constant may vary with \(K\), just as the weights in the locally finite point-evaluation example were allowed to grow with location.

Thus the local finite-order estimate follows from our choice of topology and the general continuity criterion. It is the analytic form of the continuity that the inductive construction was chosen to preserve and permit.

The construction also makes distributional operations natural. Differentiation is continuous on each \(\mathcal D_K\), since

\[
q_m(D^\alpha\varphi)\le q_{m+|\alpha|}(\varphi).
\]

The universal property makes it continuous on \(\mathcal D\), so transposition defines

\[
\langle D^\alpha T,\varphi\rangle
=(-1)^{|\alpha|}\langle T,D^\alpha\varphi\rangle.
\]

Likewise, multiplication by a fixed \(a\in C^\infty(\Omega)\) is continuous on \(\mathcal D\), by the Leibniz rule on each \(K\), and therefore defines multiplication of distributions:

\[
\langle aT,\varphi\rangle=\langle T,a\varphi\rangle.
\]

These definitions work because the corresponding operations on test functions are continuous. The topology has supplied the estimates needed to extend calculus by duality.

## 12. Three test spaces and three distribution spaces

On \(\mathbb R^d\), the natural inclusions are continuous and dense:

\[
\mathcal D\hookrightarrow\mathcal S\hookrightarrow\mathcal E.
\]

Continuity of \(\mathcal D\to\mathcal S\) follows by checking each \(\mathcal D_K\); polynomial weights are bounded on \(K\). Density follows from smooth cutoffs. If \(\chi\in C_c^\infty\) equals one near the origin and \(\chi_R(x)=\chi(x/R)\), then

\[
\chi_Rf\to f\text{ in }\mathcal E\quad(f\in\mathcal E),
\qquad
\chi_Rf\to f\text{ in }\mathcal S\quad(f\in\mathcal S).
\]

| Space | What convergence controls | Structure |
| --- | --- | --- |
| \(\mathcal E=C^\infty\) | Every derivative on each compact subset | Fréchet; closed bounded sets compact |
| \(\mathcal S\) | Every derivative with every polynomial weight | Fréchet; closed bounded sets compact |
| \(\mathcal D=C_c^\infty\) | For sequences: a common compact support and uniform convergence of every derivative | Complete strict LF-space; nonmetrizable; closed bounded sets compact |

Since these spaces have different underlying sets, topology comparisons require restriction. On \(\mathcal D(\mathbb R^d)\),

\[
\boxed{\tau_{\mathcal E}|_{\mathcal D}
\subsetneq\tau_{\mathcal S}|_{\mathcal D}
\subsetneq\tau_{\mathcal D}.}
\]

Two translated bumps distinguish the three controls. Fix a nonzero bump \(\varphi\) and let \(e_1\) be the first coordinate vector. Then

\[
\varphi(\cdot-ne_1)\to0\text{ in }\mathcal E,
\qquad
\varphi(\cdot-ne_1)\not\to0\text{ in }\mathcal S.
\]

If we instead set

\[
g_n=e^{-n^2}\varphi(\cdot-ne_1),
\]

then \(g_n\to0\) in \(\mathcal S\), since the exponential factor defeats every polynomial weight. It does not converge to zero in \(\mathcal D\), because the supports escape.

Restriction of continuous functionals reverses the inclusion chain:

\[
\boxed{\mathcal E'(\mathbb R^d)
\hookrightarrow\mathcal S'(\mathbb R^d)
\hookrightarrow\mathcal D'(\mathbb R^d).}
\]

Density makes these restriction maps injective. The three classes are compactly supported distributions, tempered distributions, and arbitrary distributions, respectively. The inclusions are strict: the constant function \(1\) defines a tempered distribution without compact support, while \(e^{|x|^2}\) defines a distribution which is not tempered. Translating a fixed nonnegative bump shows the latter: its pairing grows faster than any polynomial, whereas every fixed Schwartz seminorm of that translated bump grows at most polynomially.

This gives a concrete interpretation of the refinement direction. The topology inherited from \(\mathcal E\) on \(\mathcal D\) permits exactly restrictions of compactly supported distributions: a continuous functional on that subspace extends continuously to \(\mathcal E\) by Hahn–Banach. Likewise, the topology inherited from \(\mathcal S\) permits exactly restrictions of tempered distributions. The finer inductive topology permits every distribution. The choice of topology changes which linear observations of the same compactly supported test functions count as continuous.

There is a further topological distinction on the dual side. Weak-* convergence means

\[
T_j\to T\text{ in }\sigma(X',X)
\iff
\langle T_j,\varphi\rangle\to\langle T,\varphi\rangle
\quad\text{for every }\varphi\in X.
\]

The strong dual topology \(\beta(X',X)\) is instead generated by

\[
p_B(T)=\sup_{\varphi\in B}|\langle T,\varphi\rangle|,
\qquad B\subseteq X\text{ bounded}.
\]

Thus the bounded-set theorem for \(\mathcal D\) also describes the families on which strong convergence of distributions is tested. The dual inclusion chain by itself does not specify a dual topology. The restriction maps are continuous for the weak-* topologies, and also for the strong dual topologies, because the original inclusions send bounded sets to bounded sets; this does not assert that they are topological embeddings.

The point of the reading, for me, is learning how to make these choices. We reduced the construction of a vector topology to a local base, used convex geometry to turn local bases into seminorms, and interpreted refinements through the maps they make continuous. When the first two topologies on \(\mathcal D\) failed, those same ideas supplied a way to search for a better one: keep the fixed-support inclusions continuous and combine all the locally convex control they allow.

The resulting topology then had to justify the choice. Its bounded sets have common compact support, its Cauchy sequences converge, and its continuous linear maps are exactly those continuous on every fixed-support piece. These results explain the usual definition of test-function convergence and the local estimates for distributions. They also prepare the next questions about differentiation, localization, convolution, and Fourier analysis.

## Reading references

- Claude Warnick, *M3/4P18: Fourier Analysis and Theory of Distributions* (2016), Appendix B, especially Theorems B.20–B.23. This supplies the main route through the smooth and compactly supported test function spaces.
- Walter Rudin, *Functional Analysis*, second edition, Chapters 1 and 3; Chapter 6, §§6.2–6.8. The beginning of Chapter 6 contains the concrete construction of \(\mathcal D\), its bounded-set and convergence theorems, and the continuity criterion for distributions.
- Eduard A. Nigsch, *Locally Convex Spaces* (2017), especially §§3, 5–7, and 9. These provide the seminorm, gauge, inductive-topology, and Hahn–Banach framework behind the construction.

The parallel discussions of \(\mathcal H\) and \(\mathcal S\), and the comparison between the three test spaces, are included to make explicit the different roles of local regularity, decay, and compact support.
