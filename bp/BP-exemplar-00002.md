# Spatial Data on the Web Best Practice Exemplar

## Title
Geocoded National Address File (G-NAF) Linked Data Demonstrator

## Documentation root
https://gnafld.net

## Best Practice Scorecard
<table>
    <tr>
        <th>Best Practice</th>
        <th>Conforms?</th>
        <th>Comments</th>
    </tr>
    <tr>
        <td width="50"><a href="https://www.w3.org/TR/sdw-bp/#globally-unique-ids">01 Use globally unique persistent HTTP URIs for Spatial Things</a></td>
        <td><ul><li>- [x]</li></ul></td>
        <td></td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/sdw-bp/#indexable-by-search-engines">02 Make your spatial data indexable by search engines</a></td>
        <td>Yes</td>
        <td>The register is indexable, search GAACT714845933 in <a href="https://www.google.com">Google</a>. Howover, it has not been indexed beyond the first page of the register, so only 50 records can be searched this way at the moment.</td>
    </tr>
    <tr>
        <td><a href="https://www.w3.org/TR/sdw-bp/#linking">03 Link resources together to create the Web of Data</a></td>
        <td>Yes</td>
        <td>Address links to Street, Locality, and will link to Meshblocks once they’re published, Street links to Locality, Locality links to Geonames, and to itself (neighbours). The links don’t currently contain IANA Link Relations (see here: http://www.iana.org/assignments/link-relations/link-relations.xhtml#link-relations-1). Valid possible additions might be licence (with the link relation type license), hasAlias (with the link relation type: alternative), hasPrimary (with the link relation type: canonical), perhaps the alternates view could use the link relation type “profile”. Link to the register could use the link relation type “up”. “previous”, “next”, “first” and “last” could be used in the register links of the same name, as “item” can be used for each item in the register.</td>
    </tr>
</table>


## Implementation Report

