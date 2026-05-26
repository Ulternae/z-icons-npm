import React from 'react';

export interface LanCannabisSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCannabisSolid: React.FC<LanCannabisSolidProps>;
export default LanCannabisSolid;
