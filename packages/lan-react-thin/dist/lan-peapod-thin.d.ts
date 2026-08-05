import React from 'react';

export interface LanPeapodThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeapodThin(props: LanPeapodThinProps): React.ReactElement;
export default LanPeapodThin;
