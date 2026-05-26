import React from 'react';

export interface LanWirelessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWirelessThin: React.FC<LanWirelessThinProps>;
export default LanWirelessThin;
