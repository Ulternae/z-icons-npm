import React from 'react';

export interface LanPeanutThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutThin(props: LanPeanutThinProps): React.ReactElement;
export default LanPeanutThin;
