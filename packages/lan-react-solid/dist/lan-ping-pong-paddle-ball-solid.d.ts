import React from 'react';

export interface LanPingPongPaddleBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPingPongPaddleBallSolid(props: LanPingPongPaddleBallSolidProps): React.ReactElement;
export default LanPingPongPaddleBallSolid;
