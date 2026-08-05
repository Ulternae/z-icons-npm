import React from 'react';

export interface LanPentagonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPentagonRegular(props: LanPentagonRegularProps): React.ReactElement;
export default LanPentagonRegular;
