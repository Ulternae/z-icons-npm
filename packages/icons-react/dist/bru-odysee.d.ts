import React from 'react';

export interface BruOdyseeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruOdysee: React.FC<BruOdyseeProps>;
export default BruOdysee;
