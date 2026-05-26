import React from 'react';

export interface LanPingPongPaddleBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPingPongPaddleBallThin: React.FC<LanPingPongPaddleBallThinProps>;
export default LanPingPongPaddleBallThin;
