import React from 'react';

export interface LanPedestalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPedestalThin(props: LanPedestalThinProps): React.ReactElement;
export default LanPedestalThin;
