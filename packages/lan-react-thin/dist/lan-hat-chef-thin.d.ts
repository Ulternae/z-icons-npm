import React from 'react';

export interface LanHatChefThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatChefThin(props: LanHatChefThinProps): React.ReactElement;
export default LanHatChefThin;
