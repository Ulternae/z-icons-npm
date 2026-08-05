import React from 'react';

export interface LanPipeCircleCheckThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCircleCheckThin(props: LanPipeCircleCheckThinProps): React.ReactElement;
export default LanPipeCircleCheckThin;
