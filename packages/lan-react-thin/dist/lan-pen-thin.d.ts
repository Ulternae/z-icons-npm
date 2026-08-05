import React from 'react';

export interface LanPenThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenThin(props: LanPenThinProps): React.ReactElement;
export default LanPenThin;
