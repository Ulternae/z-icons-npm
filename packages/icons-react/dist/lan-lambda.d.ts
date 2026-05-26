import React from 'react';

export interface LanLambdaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLambda: React.FC<LanLambdaProps>;
export default LanLambda;
