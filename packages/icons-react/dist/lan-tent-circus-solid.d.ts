import React from 'react';

export interface LanTentCircusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTentCircusSolid: React.FC<LanTentCircusSolidProps>;
export default LanTentCircusSolid;
