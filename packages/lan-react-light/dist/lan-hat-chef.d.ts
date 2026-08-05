import React from 'react';

export interface LanHatChefProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatChef(props: LanHatChefProps): React.ReactElement;
export default LanHatChef;
