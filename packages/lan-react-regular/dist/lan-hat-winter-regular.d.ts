import React from 'react';

export interface LanHatWinterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWinterRegular(props: LanHatWinterRegularProps): React.ReactElement;
export default LanHatWinterRegular;
