import React from 'react';

export interface LanBrightnessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBrightnessThin: React.FC<LanBrightnessThinProps>;
export default LanBrightnessThin;
