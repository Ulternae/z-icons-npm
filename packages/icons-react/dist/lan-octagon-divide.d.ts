import React from 'react';

export interface LanOctagonDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOctagonDivide: React.FC<LanOctagonDivideProps>;
export default LanOctagonDivide;
