import React from 'react';

export interface LanBookAtlasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBookAtlasThin: React.FC<LanBookAtlasThinProps>;
export default LanBookAtlasThin;
