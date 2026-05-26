import React from 'react';

export interface LanWatermelonSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWatermelonSliceThin: React.FC<LanWatermelonSliceThinProps>;
export default LanWatermelonSliceThin;
