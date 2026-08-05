import React from 'react';

export interface LanPineappleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPineappleRegular(props: LanPineappleRegularProps): React.ReactElement;
export default LanPineappleRegular;
