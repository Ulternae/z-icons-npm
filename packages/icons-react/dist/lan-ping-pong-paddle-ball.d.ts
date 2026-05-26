import React from 'react';

export interface LanPingPongPaddleBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPingPongPaddleBall: React.FC<LanPingPongPaddleBallProps>;
export default LanPingPongPaddleBall;
