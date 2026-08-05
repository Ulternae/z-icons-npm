import React from 'react';

export interface LanCrystalBallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrystalBall(props: LanCrystalBallProps): React.ReactElement;
export default LanCrystalBall;
