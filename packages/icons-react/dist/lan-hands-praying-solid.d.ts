import React from 'react';

export interface LanHandsPrayingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandsPrayingSolid: React.FC<LanHandsPrayingSolidProps>;
export default LanHandsPrayingSolid;
