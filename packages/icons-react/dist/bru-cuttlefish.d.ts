import React from 'react';

export interface BruCuttlefishProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruCuttlefish: React.FC<BruCuttlefishProps>;
export default BruCuttlefish;
