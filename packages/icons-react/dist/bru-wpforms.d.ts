import React from 'react';

export interface BruWpformsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWpforms: React.FC<BruWpformsProps>;
export default BruWpforms;
