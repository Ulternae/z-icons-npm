import React from 'react';

export interface LanPedestalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPedestalRegular(props: LanPedestalRegularProps): React.ReactElement;
export default LanPedestalRegular;
