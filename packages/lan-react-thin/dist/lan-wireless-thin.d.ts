import React from 'react';

export interface LanWirelessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWirelessThin(props: LanWirelessThinProps): React.ReactElement;
export default LanWirelessThin;
