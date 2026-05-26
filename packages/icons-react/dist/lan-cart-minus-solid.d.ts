import React from 'react';

export interface LanCartMinusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCartMinusSolid: React.FC<LanCartMinusSolidProps>;
export default LanCartMinusSolid;
