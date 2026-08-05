import React from 'react';

export interface LanHandHoldingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingRegular(props: LanHandHoldingRegularProps): React.ReactElement;
export default LanHandHoldingRegular;
