import React from 'react';

export interface LanCircleDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleDivide: React.FC<LanCircleDivideProps>;
export default LanCircleDivide;
