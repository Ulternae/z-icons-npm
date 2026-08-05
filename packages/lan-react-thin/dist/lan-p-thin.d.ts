import React from 'react';

export interface LanPThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPThin(props: LanPThinProps): React.ReactElement;
export default LanPThin;
