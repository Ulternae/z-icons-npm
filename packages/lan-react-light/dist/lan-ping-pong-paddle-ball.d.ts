import React from 'react';

export interface LanPingPongPaddleBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPingPongPaddleBall(props: LanPingPongPaddleBallProps): React.ReactElement;
export default LanPingPongPaddleBall;
