import React from 'react';

export interface LanPersonCarryBoxSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPersonCarryBoxSolid: React.FC<LanPersonCarryBoxSolidProps>;
export default LanPersonCarryBoxSolid;
