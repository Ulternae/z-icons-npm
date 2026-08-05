import React from 'react';

export interface LanWirelessProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWireless(props: LanWirelessProps): React.ReactElement;
export default LanWireless;
