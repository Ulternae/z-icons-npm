import React from 'react';

export interface LanSwapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwapRegular(props: LanSwapRegularProps): React.ReactElement;
export default LanSwapRegular;
