import React from 'react';

export interface LanCubesRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubesRegular(props: LanCubesRegularProps): React.ReactElement;
export default LanCubesRegular;
