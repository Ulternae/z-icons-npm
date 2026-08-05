import React from 'react';

export interface LanCubesStackedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesStackedRegular(props: LanCubesStackedRegularProps): React.ReactElement;
export default LanCubesStackedRegular;
