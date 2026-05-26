import React from 'react';

export interface LanCartCirclePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartCirclePlusSolid: React.FC<LanCartCirclePlusSolidProps>;
export default LanCartCirclePlusSolid;
