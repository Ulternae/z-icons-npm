import React from 'react';

export interface LanWirelessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWireless: React.FC<LanWirelessProps>;
export default LanWireless;
