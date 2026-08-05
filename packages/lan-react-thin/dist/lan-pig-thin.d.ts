import React from 'react';

export interface LanPigThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPigThin(props: LanPigThinProps): React.ReactElement;
export default LanPigThin;
