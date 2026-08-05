import React from 'react';

export interface LanPingPongPaddleBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPingPongPaddleBallRegular(props: LanPingPongPaddleBallRegularProps): React.ReactElement;
export default LanPingPongPaddleBallRegular;
