import React from 'react';

export interface LanLambdaRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLambdaRegular: React.FC<LanLambdaRegularProps>;
export default LanLambdaRegular;
