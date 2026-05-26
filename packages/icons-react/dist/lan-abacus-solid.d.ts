import React from 'react';

export interface LanAbacusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAbacusSolid: React.FC<LanAbacusSolidProps>;
export default LanAbacusSolid;
