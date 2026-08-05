import React from 'react';

export interface LanPooThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPooThin(props: LanPooThinProps): React.ReactElement;
export default LanPooThin;
