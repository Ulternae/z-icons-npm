import React from 'react';

export interface LanPingPongPaddleBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPingPongPaddleBallSolid: React.FC<LanPingPongPaddleBallSolidProps>;
export default LanPingPongPaddleBallSolid;
