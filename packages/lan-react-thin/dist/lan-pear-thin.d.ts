import React from 'react';

export interface LanPearThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPearThin(props: LanPearThinProps): React.ReactElement;
export default LanPearThin;
