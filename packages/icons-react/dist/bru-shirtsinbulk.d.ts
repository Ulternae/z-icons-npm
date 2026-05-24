import React from 'react';

export interface BruShirtsinbulkProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruShirtsinbulk: React.FC<BruShirtsinbulkProps>;
export default BruShirtsinbulk;
