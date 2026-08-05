import React from 'react';

export interface LanLacrosseStickBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLacrosseStickBall(props: LanLacrosseStickBallProps): React.ReactElement;
export default LanLacrosseStickBall;
