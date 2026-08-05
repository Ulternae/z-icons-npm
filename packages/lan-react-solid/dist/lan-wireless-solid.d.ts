import React from 'react';

export interface LanWirelessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWirelessSolid(props: LanWirelessSolidProps): React.ReactElement;
export default LanWirelessSolid;
