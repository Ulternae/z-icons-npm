import React from 'react';

export interface LanBlindsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBlindsSolid: React.FC<LanBlindsSolidProps>;
export default LanBlindsSolid;
