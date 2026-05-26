import React from 'react';

export interface LanLambdaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLambdaSolid: React.FC<LanLambdaSolidProps>;
export default LanLambdaSolid;
