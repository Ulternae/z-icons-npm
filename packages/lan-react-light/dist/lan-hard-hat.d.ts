import React from 'react';

export interface LanHardHatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHardHat(props: LanHardHatProps): React.ReactElement;
export default LanHardHat;
