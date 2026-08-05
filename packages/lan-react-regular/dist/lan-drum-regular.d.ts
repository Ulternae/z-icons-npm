import React from 'react';

export interface LanDrumRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrumRegular(props: LanDrumRegularProps): React.ReactElement;
export default LanDrumRegular;
