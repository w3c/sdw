# SPARQL queries to compute OWL-Time relations

Simon J.D. Cox

A sequence of SPARQL queries that compute OWL-Time relations between time:TemporalEntities for which the positions are given using xsd:dateTime.

## 1. Precondition

### 1.1 Add superclass assignments

```
PREFIX : <http://www.w3.org/2006/time#>

INSERT { ?t a ?sc }
WHERE 
{
	?t a ?c .
	?c rdfs:subClassOf+ ?sc . 
	FILTER(STRSTARTS(STR(?c), "http://www.w3.org/2006/time#"))
	FILTER(STRSTARTS(STR(?sc), "http://www.w3.org/2006/time#"))
}
```

### 1.2 Compute durations (optional)
```
INSERT { ?i :hasXSDDuration ?td }
WHERE 
{
	?i a :Interval ;
		:hasBeginning ?ib ;
		:hasEnd ?ie . 
	?ib :inXSDDateTime ?tb .
	?ie :inXSDDateTime ?te .
	BIND( ?te - ?tb as ?td )
}
```

## 2. disjoint

### 2.1 Instant before/after/disjoint instants
```
INSERT { ?t1 :before ?t2 ; :disjoint ?t2 . }
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	 ?t2 a :Instant ; 
		:inXSDDateTime ?t2t . 
	FILTER ( ?t1t < ?t2t )
}

INSERT { ?t1 :after ?t2 ; :disjoint ?t2 . }
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	 ?t2 a :Instant ; 
		:inXSDDateTime ?t2t . 
	FILTER ( ?t1t > ?t2t )
}
```

### 2.2 Instant before/after/disjoint intervals

```
INSERT 
{ 
    ?t1 :before ?i2 ; :disjoint ?i2 . 
    ?i2 :after ?t1 ; :disjoint ?t1 . 
}
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1t < ?t2b )
}

INSERT 
{ 
    ?t1 :after ?i2 ; :disjoint ?i2 . 
    ?i2 :before ?t1 ; :disjoint ?t1 .
}
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1t > ?t2e )
}
```

### 2.3 Interval before/after/disjoint intervals
```
INSERT { ?i1 :before ?i2 ; :disjoint ?i2 . }
WHERE 
{
	?i1 a :Interval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1e < ?t2b )
}

INSERT { ?i1 :after ?i2 ; :disjoint ?i2 . }
WHERE 
{
	?i1 a :Interval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b > ?t2e )
}
```

### 2.4 ProperInterval before/after/disjoint intervals
```
INSERT { ?i1 :intervalAfter ?i2 ; :intervalDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b > ?t2e )
}

INSERT { ?i1 :intervalBefore ?i2 ; :intervalDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1e < ?t2b )
}

```

## 3. notDisjoint
### 3.0 general
```
INSERT 
{ 
	?i2 :notDisjoint ?i1 .
	?i1 :notDisjoint ?i2 .
}
WHERE 
{
	?i1 a :Interval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER(  ( ?t1b <= ?t2b  &&   ?t1e >= ?t2b ) || ( ?t1b <= ?t2e  &&   ?t1e >= ?t2e ) ) 
}
```

### 3.1 equals
```
INSERT { ?t1 :equals ?t2 ; :notDisjoint ?t2 . }
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	 ?t2 a :Instant ; 
		:inXSDDateTime ?t2t . 
	FILTER ( ?t1t = ?t2t )
}

INSERT { ?i1 :equals ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :Interval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b = ?t2b  &&  ?t1e = ?t2e  )
}

INSERT { ?i1 :intervalEquals ?i2 ; :equals ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b = ?t2b  &&  ?t1e = ?t2e  )
}

```

### 3.2 inside/begins/ends
```
INSERT 
{ 
	?i2 :inside ?t1 ; :hasInside ?t1 ; :notDisjoint ?t1 .
	?t1 :notDisjoint ?i2 .
}
WHERE 
{
	?t1 a :Instant ; 
		:inXSDDateTime ?t1t . 
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1t > ?t2b  &&   ?t1t < ?t2e )
}

INSERT 
{ 
	?i2 :notDisjoint ?t1 .
	?t1 :notDisjoint ?i2 .
}
WHERE 
{
	?t1 a :Instant  
	{ ?i2 a :Interval ; :hasBeginning ?t1 . }
	UNION
	{ ?i2 a :Interval ; :hasEnd ?t1 . }

}
```

### 3.3 hasInside
```
INSERT { ?i1 :hasInside ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :Interval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :Interval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b < ?t2b  &&  ?t1e > ?t2e  )
}

INSERT { ?i1 :intervalFinishedBy ?i2 ; :hasInside ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b < ?t2b  &&  ?t1e = ?t2e  )
}

INSERT { ?i1 :intervalContains ?i2 ; :hasInside ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b < ?t2b  &&  ?t1e > ?t2e  )
}

INSERT { ?i1 :intervalStartedBy ?i2 ; :hasInside ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b = ?t2b  &&  ?t1e > ?t2e  )
}
```

### 3.4 intervalIn
```
INSERT { ?i1 :intervalStarts ?i2 ; :intervalIn ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b = ?t2b  &&  ?t1e < ?t2e  )
}


INSERT { ?i1 :intervalDuring ?i2 ; :intervalIn ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b > ?t2b  &&  ?t1e < ?t2e  )
}

INSERT { ?i1 :intervalFinishes ?i2 ; :intervalIn ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b > ?t2b  &&  ?t1e = ?t2e  )
}
```

### 3.5 intervalMetBy intervalMeets 
```
INSERT { ?i1 :intervalMetBy ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1b  = ?t2e  )
}

INSERT { ?i1 :intervalMeets ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1e  = ?t2b  )
}
```

### 3.6 intervalOverlappedBy intervalOverlaps
```
INSERT { ?i1 :intervalOverlappedBy ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1e > ?t2e  &&  ?t1b > ?t2b  &&  ?t1b < ?t2e )
}

INSERT { ?i1 :intervalOverlaps ?i2 ; :notDisjoint ?i2 . }
WHERE 
{
	?i1 a :ProperInterval ; 
		:hasBeginning ?i1b ;
		:hasEnd ?i1e . 
	?i1b :inXSDDateTime ?t1b .
	?i1e :inXSDDateTime ?t1e .
	?i2 a :ProperInterval ; 
		:hasBeginning ?i2b ;
		:hasEnd ?i2e . 
	?i2b :inXSDDateTime ?t2b .
	?i2e :inXSDDateTime ?t2e .
	FILTER ( ?t1e > ?t2b  &&  ?t1b < ?t2b  &&  ?t1e < ?t2e )
}
```
