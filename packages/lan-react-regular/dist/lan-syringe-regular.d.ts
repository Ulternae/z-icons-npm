import React from 'react';

export interface LanSyringeRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSyringeRegular(props: LanSyringeRegularProps): React.ReactElement;
export default LanSyringeRegular;
