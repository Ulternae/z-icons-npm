import React from 'react';

export interface LanBiohazardThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBiohazardThin(props: LanBiohazardThinProps): React.ReactElement;
export default LanBiohazardThin;
