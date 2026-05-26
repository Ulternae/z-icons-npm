import React from 'react';

export interface LanHamsaSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHamsaSolid: React.FC<LanHamsaSolidProps>;
export default LanHamsaSolid;
