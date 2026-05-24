import React from 'react';

export interface BruRockrmsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRockrms: React.FC<BruRockrmsProps>;
export default BruRockrms;
