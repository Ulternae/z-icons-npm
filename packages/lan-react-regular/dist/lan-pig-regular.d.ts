import React from 'react';

export interface LanPigRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPigRegular(props: LanPigRegularProps): React.ReactElement;
export default LanPigRegular;
