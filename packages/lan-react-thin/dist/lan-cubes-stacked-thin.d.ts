import React from 'react';

export interface LanCubesStackedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesStackedThin(props: LanCubesStackedThinProps): React.ReactElement;
export default LanCubesStackedThin;
