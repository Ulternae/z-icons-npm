import React from 'react';

export interface LanPesetaSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesetaSignThin(props: LanPesetaSignThinProps): React.ReactElement;
export default LanPesetaSignThin;
