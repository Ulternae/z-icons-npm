import React from 'react';

export interface LanHexagonDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHexagonDivide: React.FC<LanHexagonDivideProps>;
export default LanHexagonDivide;
