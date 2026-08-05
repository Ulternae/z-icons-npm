import React from 'react';

export interface LanPentagonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPentagonThin(props: LanPentagonThinProps): React.ReactElement;
export default LanPentagonThin;
