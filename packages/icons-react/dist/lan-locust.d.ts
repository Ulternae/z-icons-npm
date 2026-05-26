import React from 'react';

export interface LanLocustProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanLocust: React.FC<LanLocustProps>;
export default LanLocust;
