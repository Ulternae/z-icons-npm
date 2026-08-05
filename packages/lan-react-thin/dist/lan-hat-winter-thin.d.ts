import React from 'react';

export interface LanHatWinterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWinterThin(props: LanHatWinterThinProps): React.ReactElement;
export default LanHatWinterThin;
