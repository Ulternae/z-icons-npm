import React from 'react';

export interface LanHandHoldingBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingBoxRegular: React.FC<LanHandHoldingBoxRegularProps>;
export default LanHandHoldingBoxRegular;
