import React from 'react';

export interface BruWhmcsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruWhmcs: React.FC<BruWhmcsProps>;
export default BruWhmcs;
