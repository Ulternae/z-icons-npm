import React from 'react';

export interface LanCubeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCubeRegular(props: LanCubeRegularProps): React.ReactElement;
export default LanCubeRegular;
