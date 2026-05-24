import React from 'react';

export interface BruScreenpalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruScreenpal: React.FC<BruScreenpalProps>;
export default BruScreenpal;
