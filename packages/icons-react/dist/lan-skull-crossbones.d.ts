import React from 'react';

export interface LanSkullCrossbonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSkullCrossbones: React.FC<LanSkullCrossbonesProps>;
export default LanSkullCrossbones;
