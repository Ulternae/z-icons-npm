import React from 'react';

export interface LanSquareDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSquareDivide: React.FC<LanSquareDivideProps>;
export default LanSquareDivide;
