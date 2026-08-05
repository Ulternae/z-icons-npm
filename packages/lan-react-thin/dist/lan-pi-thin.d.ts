import React from 'react';

export interface LanPiThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPiThin(props: LanPiThinProps): React.ReactElement;
export default LanPiThin;
