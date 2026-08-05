import React from 'react';

export interface LanPesetaSignProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesetaSign(props: LanPesetaSignProps): React.ReactElement;
export default LanPesetaSign;
