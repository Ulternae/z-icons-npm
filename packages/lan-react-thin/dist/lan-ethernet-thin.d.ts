import React from 'react';

export interface LanEthernetThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEthernetThin(props: LanEthernetThinProps): React.ReactElement;
export default LanEthernetThin;
