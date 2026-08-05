import React from 'react';

export interface LanPipeCircleCheckProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPipeCircleCheck(props: LanPipeCircleCheckProps): React.ReactElement;
export default LanPipeCircleCheck;
