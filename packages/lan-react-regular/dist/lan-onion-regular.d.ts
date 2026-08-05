import React from 'react';

export interface LanOnionRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanOnionRegular(props: LanOnionRegularProps): React.ReactElement;
export default LanOnionRegular;
