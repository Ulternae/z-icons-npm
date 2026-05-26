import React from 'react';

export interface LanHandHoldingBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingBoxThin: React.FC<LanHandHoldingBoxThinProps>;
export default LanHandHoldingBoxThin;
