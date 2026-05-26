import React from 'react';

export interface LanToothbrushThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanToothbrushThin: React.FC<LanToothbrushThinProps>;
export default LanToothbrushThin;
