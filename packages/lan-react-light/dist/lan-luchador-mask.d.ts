import React from 'react';

export interface LanLuchadorMaskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLuchadorMask(props: LanLuchadorMaskProps): React.ReactElement;
export default LanLuchadorMask;
