import React from 'react';

export interface LanWirelessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWirelessSolid: React.FC<LanWirelessSolidProps>;
export default LanWirelessSolid;
