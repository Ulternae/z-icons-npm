import React from 'react';

export interface LanPinataRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinataRegular(props: LanPinataRegularProps): React.ReactElement;
export default LanPinataRegular;
