import React from 'react';

export interface LanCabRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCabRegular(props: LanCabRegularProps): React.ReactElement;
export default LanCabRegular;
