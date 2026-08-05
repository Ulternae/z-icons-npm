import React from 'react';

export interface LanHandHoldingBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHandHoldingBoxRegular(props: LanHandHoldingBoxRegularProps): React.ReactElement;
export default LanHandHoldingBoxRegular;
