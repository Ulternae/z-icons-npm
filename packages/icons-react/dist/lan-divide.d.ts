import React from 'react';

export interface LanDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDivide: React.FC<LanDivideProps>;
export default LanDivide;
