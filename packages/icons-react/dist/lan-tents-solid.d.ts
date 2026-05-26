import React from 'react';

export interface LanTentsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentsSolid: React.FC<LanTentsSolidProps>;
export default LanTentsSolid;
