import React from 'react';

export interface LanEthernetProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEthernet(props: LanEthernetProps): React.ReactElement;
export default LanEthernet;
