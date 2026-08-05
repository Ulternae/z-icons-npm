import React from 'react';

export interface LanPingPongPaddleBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPingPongPaddleBallThin(props: LanPingPongPaddleBallThinProps): React.ReactElement;
export default LanPingPongPaddleBallThin;
