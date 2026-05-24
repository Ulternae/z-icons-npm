import React from 'react';

export interface BruMedappsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruMedapps: React.FC<BruMedappsProps>;
export default BruMedapps;
