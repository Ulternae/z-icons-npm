import React from 'react';

export interface LanMicrochipAiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochipAiThin: React.FC<LanMicrochipAiThinProps>;
export default LanMicrochipAiThin;
