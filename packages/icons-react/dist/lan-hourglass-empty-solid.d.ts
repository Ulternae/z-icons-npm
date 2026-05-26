import React from 'react';

export interface LanHourglassEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHourglassEmptySolid: React.FC<LanHourglassEmptySolidProps>;
export default LanHourglassEmptySolid;
