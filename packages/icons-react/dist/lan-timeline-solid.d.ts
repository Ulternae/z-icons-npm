import React from 'react';

export interface LanTimelineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTimelineSolid: React.FC<LanTimelineSolidProps>;
export default LanTimelineSolid;
