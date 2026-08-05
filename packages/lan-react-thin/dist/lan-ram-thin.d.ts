import React from 'react';

export interface LanRamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRamThin(props: LanRamThinProps): React.ReactElement;
export default LanRamThin;
