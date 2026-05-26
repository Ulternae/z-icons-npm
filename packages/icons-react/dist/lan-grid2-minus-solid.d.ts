import React from 'react';

export interface LanGrid2MinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanGrid2MinusSolid: React.FC<LanGrid2MinusSolidProps>;
export default LanGrid2MinusSolid;
