import React from 'react';

export interface LanPawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawThin(props: LanPawThinProps): React.ReactElement;
export default LanPawThin;
