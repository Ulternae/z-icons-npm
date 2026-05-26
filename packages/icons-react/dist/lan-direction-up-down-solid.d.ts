import React from 'react';

export interface LanDirectionUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDirectionUpDownSolid: React.FC<LanDirectionUpDownSolidProps>;
export default LanDirectionUpDownSolid;
