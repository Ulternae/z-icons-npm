import React from 'react';

export interface LanWhaleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhaleSolid: React.FC<LanWhaleSolidProps>;
export default LanWhaleSolid;
