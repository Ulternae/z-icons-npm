import React from 'react';

export interface LanHandShakaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandShakaSolid: React.FC<LanHandShakaSolidProps>;
export default LanHandShakaSolid;
