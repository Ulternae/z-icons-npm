import React from 'react';

export interface LanPingPongPaddleBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPingPongPaddleBallRegular: React.FC<LanPingPongPaddleBallRegularProps>;
export default LanPingPongPaddleBallRegular;
