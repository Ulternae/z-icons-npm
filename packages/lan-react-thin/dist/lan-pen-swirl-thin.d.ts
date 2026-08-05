import React from 'react';

export interface LanPenSwirlThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPenSwirlThin(props: LanPenSwirlThinProps): React.ReactElement;
export default LanPenSwirlThin;
