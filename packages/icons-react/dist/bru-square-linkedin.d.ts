import React from 'react';

export interface BruSquareLinkedinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const BruSquareLinkedin: React.FC<BruSquareLinkedinProps>;
export default BruSquareLinkedin;
