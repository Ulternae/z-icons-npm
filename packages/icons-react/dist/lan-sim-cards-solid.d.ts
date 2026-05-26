import React from 'react';

export interface LanSimCardsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSimCardsSolid: React.FC<LanSimCardsSolidProps>;
export default LanSimCardsSolid;
