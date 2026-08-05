import React from 'react';

export interface LanCrystalBallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrystalBallThin(props: LanCrystalBallThinProps): React.ReactElement;
export default LanCrystalBallThin;
