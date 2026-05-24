import React from 'react';

export interface BruBuromobelexperteProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruBuromobelexperte: React.FC<BruBuromobelexperteProps>;
export default BruBuromobelexperte;
