import React from 'react';

export interface LanPeachThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeachThin(props: LanPeachThinProps): React.ReactElement;
export default LanPeachThin;
