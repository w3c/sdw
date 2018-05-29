# List of Use Cases for Statistics on the Web Best Practices

This is a working document to gather ideas for use cases we should consider in the Statistics on the Web Best Practices document

When creating a new use case, follow the style of those in the [SDW use cases](https://www.w3.org/TR/sdw-ucr/#UseCases)

## Representing statistical parameters

### Contributed by: Chris Little

Many container data formats, and even service APIs and protocols, have controlled lists/taxonomies of parameters/observations/variables/measurements. These values of interest may be scalar, vector or even tensor valued. E.g. surface atmospheric pressure, sub-surface ocean current velocity or wind stress (used to forecast ocean waves), respectively.

In Meteorology and Oceanography, these lists have been maintained globally, in multiple languages, for decades. Three major container formats that use these kinds of lists are:

NetCDF - a generic format with a large ecosystem of tools and applications, and several conventions for metadata, such as [CF](http://cfconventions.org/Data/cf-standard-names/46/build/cf-standard-name-table.html)  and COARDS;

GRIB - a similar, more compact operational format for multidimensional gridded data, with tightly controlled lists/tables managed by WMO, see [http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_GRIB2_CodeFlag_en.pdf](http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_GRIB2_CodeFlag_en.pdf) Code Table 4.2;

BUFR - another WMO operational format, suitable for point, line and polygon like features, with thousands of entries in its controlled lists, see [http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_BUFRCREX_TableB_en.pdf](http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_BUFRCREX_TableB_en.pdf) .

To keep these lists manageable, and to avoid combinatorial explosions of possibilities, attributes or qualifiers have been constructed so that various derived statistics of the parameters can be indicated in the metadata, such as mean, median, standard deviation, variance, etc., without creating new entries.

These schemes are incomplete, as second and higher order statistics, such as quartiles, quintiles, deciles and even percentiles of a parameter distribution are routinely used, but there is no standard scheme of creating and applying these qualifiers. It is best practice in meteorology and oceanography to forecast a range of values, known as an ensemble, for a parameter of interest, and then extract various statistics and threshold values. The ensembles typically have 50 -100 members.

The various schemes and the controlled lists are also inconsistent, as, for example, one strategic policy has been to generate extra entries for commonly used statistics of parameters, so the registries may contain both (instantaneous) wind speed, and mean wind speed, for example.

The use case, or more precisely, a requirement, is to have a standard statistical scheme that allows the consistent and rigorous generation of a variety of statistical qualifiers to create useful and machinable metadata to qualify lists of parameters in a variety of domains.

### Related Deliverables:

### Related Requirements:

## Representing (and filtering and aggregating) temporal data

### Contributed by: Chris Little

This use case is really a requirement too. When statistical values are derived from quantities of interest (e.g. climatological mean wind velocity at a location for the month of October), there are a wide variety of time durations and instants that may be underpinning the statistics of interest.

When the RDF Data Cube was created by ISO/UN statistical experts from the SDMX standard, the only agreed 'sub-setting' mechanism was 'slice' across a dimension. Successive or simultaneous slicing along all the dimensions will allow single values to be extracted from the data cube. I understand that there was further work on reporting periods for aggregating the values over weeks, months, quarters, years, etc., but the work was not successfully concluded.

Time is notoriously complicated. As St Augustine said about 400CE  "Si nemo ex me quaerat, scio; si quaerente explicare velim, nescio"
[ "If no one asks me, I know what it is. If I wish to explain it to him who asks, I do not know."] Confessions, Chap XI, Book 14. The complications are because of calendars, which try to put random periods of rotation of astronomical bodies into useful and understandable patterns. And software that tries to do this is prone to errors too, as the algorithms are heuristic and imprecise rather than mathematical.

The standard calendar is the Gregorian, which incorporates leap days almost every 4 years, and also leap seconds as specified by the IERS in Paris. This calendar, and instants and durations can be reasoned about using the W3C Recommendation:  Time Ontology in OWL, https://www.w3.org/TR/owl-time/  and this can also be used as a basis for constructing other calendars.

OGC has a registry of temporal Coordinate Reference Systems, which are more tractable than calendars, such Julian Day Number (days and fractions of days since noon on Monday, January 1, 4713 BCE), Unix time (milliseconds since midnight, 1 Jan 1970), and International Atomic Time TAI (a count of SI seconds since midnight 1 January 1977, corrected to Mean Sea Level).

This 'use case' is proposing that some consistent and rigorous structures be built that will allow the construction of a wide variety of durations or periods , relating to a variety of calendar or temporal CRSs for aggregation of statistics.

Example: climatology for a location and a parameter of interest is usually constructed using 30 year periods of yearly, monthly, daily, hourly or even more frequent data. A user may be interested in the climatological mean daily temperature for January, or the maximum daily minimum temperature for the European winter months of Dec, Jan and Feb.

How can such descriptive metadata be constructed for use in a wide variety of domains, and allow rigorous reasoning about the values of interest?

I  hope that is coherent. We tried to do something like this several years ago, put kept putting it further down the priority list!

### Related Deliverables:

### Related Requirements:

## Area profile

### Contributed by: Bill Roberts

Put together a summary 'picture' of a place by gathering together statistical data on various topics

An example of this could be the kind of table that appears on this page about [Aberdeen](http://statistics.gov.scot/doc/statistical-geography/S12000033?tab=data).  In this case however, all data is drawn from a single data collection and database, which simplifies the problem a bit.

In general, the following steps might be needed:

* find out a well-used identifier or identifiers for the place of interest
* understand the definition/geometry of relevant representations of locations to know what data refers to
* discover sources of relevant data about the place, perhaps from multiple locations across the web
* assess relevance, trust, quality of data sources
* select data about the location of interest, from datasets that might hold data about lots of different places - choosing the most appropriate values of other statistical dimensions (such as time period).
* understand hierarchical relationships between different geographical areas and perhaps aggregate data
* retrieve data in a form that is easy to process in software

TO DO: add detail and examples

## Benchmarking

### Contributed by: Bill Roberts

Compare one place or organisation against others, in terms of one or more measures

TO DO: add detail and examples

### Related Deliverables:

### Related Requirements:

## Find places by criteria

### Contributed by: Bill Roberts

Find places which satisfy one or more criteria, expressed in terms of values of statistical measures

TO DO: add detail and examples

### Related Deliverables:

### Related Requirements:

## Slice and dice a statistical data cube

### Contributed by: Bill Roberts

Select a subset of a statistical data cube by fixing the values of some of the dimensions.  Fixing a single value of a dimension creates a slice.  This is generally fairly straightforward.  Another useful but sometimes more complex requirement is to select a list or range of possible values of a dimension.

TO DO: list the various ways in which multiple dimension values might be specified: a list, or a range (if the dimension is 'orderable').

### Related Deliverables:

### Related Requirements:

## Manage and share a re-usable codelist

### Contributed by: Bill Roberts

Registry/register idea (there was some UK gov best practice published for this. See https://github.com/UKGovLD/registry-core/wiki )

Also, more recently the UK Government Digital Service is working on registers: see https://registers.cloudapps.digital/

...

### Related Deliverables:

### Related Requirements:

## Verify dimension values against external codelist

### Contributed by: Bill Roberts

Check whether a dimension of a statistical dataset use only values from an externally managed 'official' code list

Different datasets sharing codelists leads to increased comparability and interoperability of data.  If adherence to a particular recommended or mandated codelist is a measure of data quality, then during the process of preparing or disseminating data, it is necessary to check whether all the dimension values are 'on the list'. 


### Related Deliverables:

### Related Requirements:

## Revised estimates

### Contributed by: Bill Roberts

In some situations, organisations publish initial estimates of some quantity of interest, which are later revised when more detailed or more accurate information becomes available.  This is the case in most countries for estimates of GDP for example.  In the UK, the Office for National Statistics produces preliminary, second and final estimates of [GDP](https://www.ons.gov.uk/economy/grossdomesticproductgdp).

In cases like this it can be important to make multiple estimates of the same figure available, together with information on the timing, status or methodology used to make each estimate.

### Related Deliverables:

### Related Requirements:

## Countries or regions or organisations publish consistent data to allow comparisons

### Contributed by: Bill Roberts

Different organisations, for example representing a country or region within a country, agree to share data following a consistent pattern, so that comparisons can be made.  For example, the national statistics institutes of European countries report numerous data to Eurostat, that compiles cross-European figures. See http://ec.europa.eu/eurostat

### Related Deliverables:

### Related Requirements:

## Comparison and manipulation of geographical dimension ranges between statistical data cubes

### Contributed by: Rob Atkinson

The geographic dimension of a data set will be typically one of named areas (countries, states, statistical areas), coordinates (representing regular cells), or named cells - including DGGS ). These may be hierarchical. Discovery of geographically co-located datasets based on geographic dimension requires one of the following:
1. Common dimension (by dimension descriptor identifier - as supported by RDF-Datacube model of dimensions as named entities)
2. Equivalent dimension (by commonality of range declaration of different dimension descriptors)
3. Hierarchy overlap (i.e. dimension of dataset A is contained within the hierarchy of dimension of dataset B - e.g. data for Arizona can be found in a dataset of all countries where the geographic dimension is a hierarchy of countries/states and the range of countries includes USA)
4. Geographic overlap - a geographic function can be defined that expresses overlap between the ranges of the geographic dimensions.

Are there other ways of discovering overlap? 
Is there some measure of resolution - for example a 3D model of a house in Arizona is a completely different scale - is it relevant to discover it while looking for statistics about Arizona, and how to discriminate.

Discovery is the first step, subsetting to access relevant slices will then be necessary, and requires transformation of geographic ranges into the relevant expression for the target dataset dimensions.

### Related Deliverables:

### Related Requirements:

## Represent statistical quantities in RDF

### Contributed by: Mark Hedley

Provide an RDF graph of statistical entities, simple enough for encoders and developers to read and understand, demonstrating a set of plausible definitions, as described below.

To limit complexity, provide an entity with a single data value and metadata to describe that single value.

Statistical Entities

1. Measured mean sea level at the tide guage in Newlyn Harbour, Cornwall, UK, over a defined time period, with respect to the Airy 1830 ellipsoid vertical datum.
1. Total global energy change at the top of the atmosphere, over a defined time period, integrated (area weighted sum) over the globe using the WGS84 representation of (longitude, latitude, height)
1. The 95th percentile value of forecast rainfall rate at a specified ground level location at a specified time, from a discrete probability density function of 15 members
1. Median household income for the state of Colorado, USA at the time of the last census.

Provide the graph as file available to download.

Ensure that all URLs within this file resolve.

### Related Deliverables:

### Related Requirements:

## Data Partitioning/Tiling

### Contributed by: Chris Little

Many statistical data cubes are too voluminous to process locally. They may be in an archive that only offers data retrieval, but no commensurate processing service, or may be required in a local client that has intermittent or low bandwidth connectivity.

1. Archived timeseries of wind speed and direction, for many locations, with observations several times per minute,  for many decades, need to be re-processed to re-calculate a more accurate climatology of average, extreme and gust speeds. The timeseries should be partitioned into, say, 1 month 'slices' of about nearly a million values.

2. A global archive of wave observations dating back to 1853, grouped into 5 degree lat-long rectangles needs to be processed to give more modern estimates of extreme wave heights and periods. There may be tens of thousands of observations in each rectangle. The data needs to processed one 'tile' or 2D partition, at a time. Each wave observation is accompanied by some metadata on quality used to weight the statistical processing.

A global atmospheric reanalysis project is then used to re-calculate atmospheric parameters modelled for the globe on an approximately 5Km grid. In particular, the surface wind stress (a nine parameter, 3x3, tensor) is of interest to predict wave heights and compare to the observed climatology of wave heights.

3. A regional atmospheric archive is processed to produce a climatology of turbulence and atmospheric wave motion near orography, such as affects gliders and light aircraft. The data is retrieved in 2D tiles for several levels of the atmosphere, and used produce a new data store of 3D partitions or tiles or cubelets for atmospheric 'boxes'. There will be separate boxes for different times of the year.

It is envisaged that each of these partitions of data would have a persistent URI to allow cacheing to lighten the load on backend servcers and improve responsiveness and scalability for clients.

The requirements are to have a consistent terminology and ontology to describe these differing patterns of 'batching' or 'paging' data for processing. 

There are also requirements for describing the 'next' tile and 'previous' tile in the different dimensions.

The structure of each tile may be need to be described, and its relationship to the underlying RDF DataCube definitions. There may be drastically different partitioning schemes, such as a constant count along a dimension, or a quantative partioning based on data volume for a sparse data cube. the 'observations' of the data cube may be scalars, vectors, or even more complex entities (geometries?)

### Related Deliverables:

### Related Requirements:

