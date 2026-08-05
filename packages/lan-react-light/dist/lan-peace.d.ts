import React from 'react';

export interface LanPeaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeace(props: LanPeaceProps): React.ReactElement;
export default LanPeace;
