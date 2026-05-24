import React from 'react';

export interface BruRedRiverProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruRedRiver: React.FC<BruRedRiverProps>;
export default BruRedRiver;
