import React from 'react';

export interface LanCrystalBallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrystalBallRegular(props: LanCrystalBallRegularProps): React.ReactElement;
export default LanCrystalBallRegular;
