import React from 'react';

export interface LanEthernetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEthernetRegular(props: LanEthernetRegularProps): React.ReactElement;
export default LanEthernetRegular;
