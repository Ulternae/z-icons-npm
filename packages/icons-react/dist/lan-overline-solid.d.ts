import React from 'react';

export interface LanOverlineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanOverlineSolid: React.FC<LanOverlineSolidProps>;
export default LanOverlineSolid;
