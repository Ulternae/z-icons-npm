import React from 'react';

export interface LanPersonCarryEmptySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCarryEmptySolid: React.FC<LanPersonCarryEmptySolidProps>;
export default LanPersonCarryEmptySolid;
