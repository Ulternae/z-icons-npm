import React from 'react';

export interface LanHatChefRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatChefRegular(props: LanHatChefRegularProps): React.ReactElement;
export default LanHatChefRegular;
