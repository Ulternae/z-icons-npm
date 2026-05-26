import React from 'react';

export interface LanWirelessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWirelessRegular: React.FC<LanWirelessRegularProps>;
export default LanWirelessRegular;
