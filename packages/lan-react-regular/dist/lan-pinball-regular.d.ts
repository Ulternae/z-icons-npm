import React from 'react';

export interface LanPinballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPinballRegular(props: LanPinballRegularProps): React.ReactElement;
export default LanPinballRegular;
