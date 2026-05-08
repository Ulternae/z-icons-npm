import React from 'react';

export interface MinaDivideProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaDivide: React.FC<MinaDivideProps>;
export default MinaDivide;
