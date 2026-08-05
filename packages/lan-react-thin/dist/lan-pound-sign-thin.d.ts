import React from 'react';

export interface LanPoundSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoundSignThin(props: LanPoundSignThinProps): React.ReactElement;
export default LanPoundSignThin;
