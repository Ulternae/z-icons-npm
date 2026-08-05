import React from 'react';

export interface LanHatWinterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWinter(props: LanHatWinterProps): React.ReactElement;
export default LanHatWinter;
