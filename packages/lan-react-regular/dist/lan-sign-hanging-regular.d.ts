import React from 'react';

export interface LanSignHangingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSignHangingRegular(props: LanSignHangingRegularProps): React.ReactElement;
export default LanSignHangingRegular;
