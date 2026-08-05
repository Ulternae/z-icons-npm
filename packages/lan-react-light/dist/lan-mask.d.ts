import React from 'react';

export interface LanMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMask(props: LanMaskProps): React.ReactElement;
export default LanMask;
