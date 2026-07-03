import React from 'react';

export interface BruShirtsinbulkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function BruShirtsinbulk(props: BruShirtsinbulkProps): React.ReactElement;
export default BruShirtsinbulk;
