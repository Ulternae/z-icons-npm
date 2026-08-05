import React from 'react';

export interface LanWirelessRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWirelessRegular(props: LanWirelessRegularProps): React.ReactElement;
export default LanWirelessRegular;
