import React from 'react';

export interface LanHandsHoldingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandsHoldingRegular(props: LanHandsHoldingRegularProps): React.ReactElement;
export default LanHandsHoldingRegular;
