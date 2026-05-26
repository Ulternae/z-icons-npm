import React from 'react';

export interface LanClawMarksSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanClawMarksSolid: React.FC<LanClawMarksSolidProps>;
export default LanClawMarksSolid;
