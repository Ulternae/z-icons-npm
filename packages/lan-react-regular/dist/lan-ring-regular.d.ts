import React from 'react';

export interface LanRingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRingRegular(props: LanRingRegularProps): React.ReactElement;
export default LanRingRegular;
