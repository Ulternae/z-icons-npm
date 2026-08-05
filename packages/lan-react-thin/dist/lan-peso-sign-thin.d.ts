import React from 'react';

export interface LanPesoSignThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPesoSignThin(props: LanPesoSignThinProps): React.ReactElement;
export default LanPesoSignThin;
