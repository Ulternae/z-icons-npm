import React from 'react';

export interface LanHandHoldingBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHandHoldingBox: React.FC<LanHandHoldingBoxProps>;
export default LanHandHoldingBox;
