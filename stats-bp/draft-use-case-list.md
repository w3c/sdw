# List of Use Cases for Statistics on the Web Best Practices

This is a working document to gather ideas for use cases we should consider in the Statistics on the Web Best Practices document

When creating a new use case, follow the style of those in the [SDW use cases](https://www.w3.org/TR/sdw-ucr/#UseCases)

## Representing statistical parameters

Contributed by: Chris Little

Many container data formats, and even service APIs and protocols, have controlled lists/taxonomies of parameters/observations/variables/measurements. These values of interest may be scalar, vector or even tensor valued. E.g. surface atmospheric pressure, sub-surface ocean current velocity or wind stress (used to forecast ocean waves), respectively.

In Meteorology and Oceanography, these lists have been maintained globally, in multiple languages, for decades. Three major container formats that use these kinds of lists are:

NetCDF - a generic format with a large ecosystem of tools and applications, and several conventions for metadata, such as [CF](http://cfconventions.org/Data/cf-standard-names/46/build/cf-standard-name-table.html)  and COARDS;

GRIB - a similar, more compact operational format for multidimensional gridded data, with tightly controlled lists/tables managed by WMO, see [http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_GRIB2_CodeFlag_en.pdf](http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_GRIB2_CodeFlag_en.pdf) Code Table 4.2;

BUFR - another WMO operational format, suitable for point, line and polygon like features, with thousands of entries in its controlled lists, see [http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_BUFRCREX_TableB_en.pdf](http://www.wmo.int/pages/prog/www/WMOCodes/WMO306_vI2/LatestVERSION/WMO306_vI2_BUFRCREX_TableB_en.pdf) .

To keep these lists manageable, and to avoid combinatorial explosions of possibilities, attributes or qualifiers have been constructed so that various derived statistics of the parameters can be indicated in the metadata, such as mean, median, standard deviation, variance, etc., without creating new entries.

These schemes are incomplete, as second and higher order statistics, such as quartiles, quintiles, deciles and even percentiles of a parameter distribution are routinely used, but there is no standard scheme of creating and applying these qualifiers. It is best practice in meteorology and oceanography to forecast a range of values, known as an ensemble, for a parameter of interest, and then extract various statistics and threshold values. The ensembles typically have 50 -100 members.

The various schemes and the controlled lists are also inconsistent, as, for example, one strategic policy has been to generate extra entries for commonly used statistics of parameters, so the registries may contain both (instantaneous) wind speed, and mean wind speed, for example.

The use case, or more precisely, a requirement, is to have a standard statistical scheme that allows the consistent and rigorous generation of a variety of statistical qualifiers to create useful and machinable metadata to qualify lists of parameters in a variety of domains.

## Representing (and filtering and aggregating) temporal data

Contributed by: Chris Little

This use case is really a requirement too. When statistical values are derived from quantities of interest (e.g. climatological mean wind velocity at a location for the month of October), there are a wide variety of time durations and instants that may be underpinning the statistics of interest.

When the RDF Data Cube was created by ISO/UN statistical experts from the SDMX standard, the only agreed 'sub-setting' mechanism was 'slice' across a dimension. Successive or simultaneous slicing along all the dimensions will allow single values to be extracted from the data cube. I understand that there was further work on reporting periods for aggregating the values over weeks, months, quarters, years, etc., but the work was not successfully concluded.

Time is notoriously complicated. As St Augustine said about 400CE  "Si nemo ex me quaerat, scio; si quaerente explicare velim, nescio"
[ "If no one asks me, I know what it is. If I wish to explain it to him who asks, I do not know."] Confessions, Chap XI, Book 14. The complications are because of calendars, which try to put random periods of rotation of astronomical bodies into useful and understandable patterns. And software that tries to do this is prone to errors too, as the algorithms are heuristic and imprecise rather than mathematical.

The standard calendar is the Gregorian, which incorporates leap days almost every 4 years, and also leap seconds as specified by the IERS in Paris. This calendar, and instants and durations can be reasoned about using the W3C Recommendation:  Time Ontology in OWL, https://www.w3.org/TR/owl-time/  and this can also be used as a basis for constructing other calendars.

OGC has a registry of temporal Coordinate Reference Systems, which are more tractable than calendars, such Julian Day Number (days and fractions of days since noon on Monday, January 1, 4713 BCE), Unix time (milliseconds since midnight, 1 Jan 1970), and International Atomic Time (TAI).

This 'use case' is proposing that some consistent and rigorous structures be built that will allow the construction of a wide variety of durations or periods , relating to a variety of calendar or temporal CRSs for aggregation of statistics.

Example: climatology for a location and a parameter of interest is usually constructed using 30 year periods of yearly, monthly, daily, hourly or even more frequent data. A user may be interested in the climatological mean daily temperature for January, or the maximum daily minimum temperature for the European winter months of Dec, Jan and Feb.

How can such descriptive metadata be constructed for use in a wide variety of domains, and allow rigorous reasoning about the values of interest?

I  hope that is coherent. We tried to do something like this several years ago, put kept putting it further down the priority list!
