import React from 'react';

export interface LanPineappleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPineapple(props: LanPineappleProps): React.ReactElement;
export default LanPineapple;
