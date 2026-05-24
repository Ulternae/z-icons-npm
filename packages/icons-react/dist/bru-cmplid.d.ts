import React from 'react';

export interface BruCmplidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCmplid: React.FC<BruCmplidProps>;
export default BruCmplid;
