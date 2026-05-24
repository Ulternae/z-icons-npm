import React from 'react';

export interface BruUmbracoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruUmbraco: React.FC<BruUmbracoProps>;
export default BruUmbraco;
