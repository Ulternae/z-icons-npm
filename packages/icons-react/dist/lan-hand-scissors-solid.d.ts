import React from 'react';

export interface LanHandScissorsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandScissorsSolid: React.FC<LanHandScissorsSolidProps>;
export default LanHandScissorsSolid;
