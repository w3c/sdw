# Proposed specification for serving the SSN documents

This document defines proposed specifications for serving the ontologies developed by the W3C/OGC Spatial Data on the Web SSN subgroup.


## SOSA

*URI:* http://www.w3.org/ns/sosa/

*Version to use for publication:* http://w3c.github.io/sdw/ssn/integrated/sosa.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/ with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/ with a Accept header that is compatible with `application/rdf+xml`, serve sosa.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/sosa/sosa.rdf
Content-Disposition: filename= sosa.rdf;
```

When operating a GET at http://www.w3.org/ns/sosa/sosa.rdf with a Accept header that is compatible with `application/rdf+xml`, serve sosa.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= sosa.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/sosa/ with a Accept header that is compatible with `text/turtle`, serve sosa.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/sosa/sosa.ttl
Content-Disposition: filename= sosa.ttl;
```

When operating a GET at http://www.w3.org/ns/sosa/sosa.ttl with a Accept header that is compatible with `text/turtle`, serve sosa.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= sosa.ttl;
```

### The ontology resources:


The list of SOSA resource URLs is:

- http://www.w3.org/ns/sosa/ActuatableProperty
- http://www.w3.org/ns/sosa/Actuation
- http://www.w3.org/ns/sosa/Actuator
- http://www.w3.org/ns/sosa/FeatureOfInterest
- http://www.w3.org/ns/sosa/ObservableProperty
- http://www.w3.org/ns/sosa/Observation
- http://www.w3.org/ns/sosa/Platform
- http://www.w3.org/ns/sosa/Procedure
- http://www.w3.org/ns/sosa/Repeatability
- http://www.w3.org/ns/sosa/Result
- http://www.w3.org/ns/sosa/Sample
- http://www.w3.org/ns/sosa/Sampler
- http://www.w3.org/ns/sosa/Sampling
- http://www.w3.org/ns/sosa/Sensor
- http://www.w3.org/ns/sosa/actsOnProperty
- http://www.w3.org/ns/sosa/madeByActuator
- http://www.w3.org/ns/sosa/hasFeatureOfInterest
- http://www.w3.org/ns/sosa/hasResult
- http://www.w3.org/ns/sosa/hasResultingSample
- http://www.w3.org/ns/sosa/hasSample
- http://www.w3.org/ns/sosa/hosts
- http://www.w3.org/ns/sosa/isActedOnBy 
- http://www.w3.org/ns/sosa/isFeatureOfInterestOf
- http://www.w3.org/ns/sosa/isHostedBy
- http://www.w3.org/ns/sosa/isObservedBy
- http://www.w3.org/ns/sosa/isResultOf
- http://www.w3.org/ns/sosa/isSampleOf
- http://www.w3.org/ns/sosa/isSamplingResultOf
- http://www.w3.org/ns/sosa/madeActuation
- http://www.w3.org/ns/sosa/madeBySampler
- http://www.w3.org/ns/sosa/madeBySensor
- http://www.w3.org/ns/sosa/madeObservation
- http://www.w3.org/ns/sosa/madeSampling
- http://www.w3.org/ns/sosa/observedProperty
- http://www.w3.org/ns/sosa/observes
- http://www.w3.org/ns/sosa/phenomenonTime 
- http://www.w3.org/ns/sosa/usedProcedure 
- http://www.w3.org/ns/sosa/hasSimpleResult
- http://www.w3.org/ns/sosa/hasResultTime


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/xyz with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#SOSAxyz


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/xyz with a Accept header that is compatible with `application/rdf+xml`, 303 redirect to http://www.w3.org/ns/sosa/sosa.rdf


*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/sosa/xyz with a Accept header that is compatible with `text/turtle`, 303 redirect to http://www.w3.org/ns/sosa/sosa.ttl






## SSN

*URI:* http://www.w3.org/ns/ssn/

*Version to use for publication:* http://w3c.github.io/sdw/ssn/integrated/ssn.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/ with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/ with a Accept header that is compatible with `application/rdf+xml`, serve ssn.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/ssn/ssn.rdf
Content-Disposition: filename= ssn.rdf;
```

When operating a GET at http://www.w3.org/ns/ssn/ssn.rdf with a Accept header that is compatible with `application/rdf+xml`, serve ssn.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= ssn.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/ssn/ with a Accept header that is compatible with `text/turtle`, serve ssn.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/ssn/ssn.ttl
Content-Disposition: filename= ssn.ttl;
```

When operating a GET at http://www.w3.org/ns/ssn/ssn.ttl with a Accept header that is compatible with `text/turtle`, serve ssn.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= ssn.ttl;
```

### The ontology resources:

The list of SSN resource URLs is:

- http://www.w3.org/ns/ssn/Accuracy
- http://www.w3.org/ns/ssn/ActuationRange
- http://www.w3.org/ns/ssn/BatteryLifetime
- http://www.w3.org/ns/ssn/Condition
- http://www.w3.org/ns/ssn/Deployment
- http://www.w3.org/ns/ssn/DetectionLimit
- http://www.w3.org/ns/ssn/Drift
- http://www.w3.org/ns/ssn/Frequency
- http://www.w3.org/ns/ssn/Input
- http://www.w3.org/ns/ssn/Latency
- http://www.w3.org/ns/ssn/MaintenanceSchedule
- http://www.w3.org/ns/ssn/MeasurementRange
- http://www.w3.org/ns/ssn/OperatingPowerRange
- http://www.w3.org/ns/ssn/OperatingProperty
- http://www.w3.org/ns/ssn/OperatingRange
- http://www.w3.org/ns/ssn/Output
- http://www.w3.org/ns/ssn/Precision
- http://www.w3.org/ns/ssn/Property
- http://www.w3.org/ns/ssn/Resolution
- http://www.w3.org/ns/ssn/ResponseTime
- http://www.w3.org/ns/ssn/SystemCapability
- http://www.w3.org/ns/ssn/SystemProperty
- http://www.w3.org/ns/ssn/Selectivity
- http://www.w3.org/ns/ssn/Sensitivity
- http://www.w3.org/ns/ssn/Stimulus
- http://www.w3.org/ns/ssn/SurvivalProperty
- http://www.w3.org/ns/ssn/SurvivalRange
- http://www.w3.org/ns/ssn/System
- http://www.w3.org/ns/ssn/SystemLifetime
- http://www.w3.org/ns/ssn/deployedOnPlatform
- http://www.w3.org/ns/ssn/deployedSystem
- http://www.w3.org/ns/ssn/detects
- http://www.w3.org/ns/ssn/forProperty
- http://www.w3.org/ns/ssn/hasDeployment
- http://www.w3.org/ns/ssn/hasInput
- http://www.w3.org/ns/ssn/hasOutput
- http://www.w3.org/ns/ssn/hasOperatingProperty
- http://www.w3.org/ns/ssn/hasOperatingRange
- http://www.w3.org/ns/ssn/hasProperty
- http://www.w3.org/ns/ssn/hasSubSystem
- http://www.w3.org/ns/ssn/hasSurvivalProperty
- http://www.w3.org/ns/ssn/hasSurvivalRange
- http://www.w3.org/ns/ssn/hasSystemCapability
- http://www.w3.org/ns/ssn/hasSystemProperty
- http://www.w3.org/ns/ssn/implementedBy
- http://www.w3.org/ns/ssn/implements
- http://www.w3.org/ns/ssn/inCondition
- http://www.w3.org/ns/ssn/inDeployment
- http://www.w3.org/ns/ssn/isPropertyOf
- http://www.w3.org/ns/ssn/isProxyFor
- http://www.w3.org/ns/ssn/qualityOfObservation
- http://www.w3.org/ns/ssn/wasOriginatedBy


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/xyz with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#SSNxyz


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/xyz with a Accept header that is compatible with `application/rdf+xml`, 303 redirect to http://www.w3.org/ns/ssn/ssn.rdf


*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/ssn/xyz with a Accept header that is compatible with `text/turtle`, 303 redirect to http://www.w3.org/ns/ssn/ssn.ttl


## SSNX

*URI:* http://purl.oclc.org/NET/ssnx/ssn

*URI on the W3C Server:* https://www.w3.org/2017/01/ssn-ssnx/

*Version to use for publication:* http://w3c.github.io/sdw/ssn/integrated/ssnx.ttl


After having it online, need to ask to change the old redirection to the new location of the document, see https://lists.w3.org/Archives/Public/public-sdw-wg/2017Apr/0124.html 


### The ontology document:

Basic hash-based content-negotiation.


## SSN-DUL

*URI:* http://www.w3.org/ns/ssn/dul

*Version to use for publication:* http://w3c.github.io/sdw/ssn/integrated/ssn-dul.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/dul with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#DUL_Alignment


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/ssn/dul with a Accept header that is compatible with `application/rdf+xml`, serve ssn-dul.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/ssn/dul/ssn-dul.rdf
Content-Disposition: filename= ssn-dul.rdf;
```

When operating a GET at http://www.w3.org/ns/ssn/dul/ssn-dul.rdf with a Accept header that is compatible with `application/rdf+xml`, serve ssn-dul.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= ssn-dul.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/ssn/dul with a Accept header that is compatible with `text/turtle`, serve ssn-dul.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/ssn/dul/ssn-dul.ttl
Content-Disposition: filename= ssn-dul.ttl;
```

When operating a GET at http://www.w3.org/ns/ssn/dul/ssn-dul.ttl with a Accept header that is compatible with `text/turtle`, serve ssn.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= ssn-dul.ttl;
```




## SOSA-O&M

*URI:* http(s)://www.w3.org/ns/sosa/om

*Version to use for publication:* http://w3c.github.io/sdw/ssn/rdf/sosa-om-mapping.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/om with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#OM_Alignment


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/om with a Accept header that is compatible with `application/rdf+xml`, serve sosa-om-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/sosa/om.rdf
Content-Disposition: filename= sosa-om.rdf;
```

When operating a GET at http://www.w3.org/ns/sosa/om.rdf with a Accept header that is compatible with `application/rdf+xml`, serve sosa-om-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= sosa-om.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/sosa/om with a Accept header that is compatible with `text/turtle`, serve sosa-om-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/sosa/om.ttl
Content-Disposition: filename= sosa-om.ttl;
```

When operating a GET at http://www.w3.org/ns/sosa/om.ttl with a Accept header that is compatible with `text/turtle`, serve sosa-om-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= sosa-om.ttl;
```


## SOSA-OBOE

*URI:* http(s)://www.w3.org/ns/sosa/oboe

*Version to use for publication:* http://w3c.github.io/sdw/ssn/rdf/sosa-oboe-mapping.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/oboe with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#OBOE_Alignment


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/oboe with a Accept header that is compatible with `application/rdf+xml`, serve sosa-oboe-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/sosa/oboe.rdf
Content-Disposition: filename= sosa-oboe.rdf;
```

When operating a GET at http://www.w3.org/ns/sosa/oboe.rdf with a Accept header that is compatible with `application/rdf+xml`, serve sosa-oboe-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= sosa-oboe.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/sosa/oboe with a Accept header that is compatible with `text/turtle`, serve sosa-oboe-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/sosa/oboe.ttl
Content-Disposition: filename= sosa-oboe.ttl;
```

When operating a GET at http://www.w3.org/ns/sosa/oboe.ttl with a Accept header that is compatible with `text/turtle`, serve sosa-oboe-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= sosa-oboe.ttl;
```


## SOSA-PROV

*URI:* http://www.w3.org/ns/sosa/prov

*Version to use for publication:* http://w3c.github.io/sdw/ssn/rdf/sosa-prov-mapping.ttl


### The ontology document:


*HTML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/prov with a Accept header that is compatible with `text/html`, 303 redirect to https://www.w3.org/TR/vocab-ssn/#PROV_Alignment


*RDF/XML representation:* 

When operating a GET at http://www.w3.org/ns/sosa/prov with a Accept header that is compatible with `application/rdf+xml`, serve sosa-prov-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Location: http://www.w3.org/ns/sosa/prov.rdf
Content-Disposition: filename= sosa-prov.rdf;
```

When operating a GET at http://www.w3.org/ns/sosa/prov.rdf with a Accept header that is compatible with `application/rdf+xml`, serve sosa-prov-mapping.rdf, with headers:

```
Content-Type: application/rdf+xml
Content-Disposition: filename= sosa-prov.rdf;
```

*Turtle representation:* 

When operating a GET at http://www.w3.org/ns/sosa/prov with a Accept header that is compatible with `text/turtle`, serve sosa-prov-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Location: http://www.w3.org/ns/sosa/prov.ttl
Content-Disposition: filename= sosa-prov.ttl;
```

When operating a GET at http://www.w3.org/ns/sosa/prov.ttl with a Accept header that is compatible with `text/turtle`, serve sosa-prov-mapping.ttl, with headers:

```
Content-Type: text/turtle
Content-Disposition: filename= sosa-prov.ttl;
```


