import React from 'react';

export interface LanMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMinusSolid: React.FC<LanMinusSolidProps>;
export default LanMinusSolid;
