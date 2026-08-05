import React from 'react';

export interface LanCrystalBallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrystalBallSolid(props: LanCrystalBallSolidProps): React.ReactElement;
export default LanCrystalBallSolid;
