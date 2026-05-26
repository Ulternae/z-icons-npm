import React from 'react';

export interface LanMicrochipAiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMicrochipAi: React.FC<LanMicrochipAiProps>;
export default LanMicrochipAi;
