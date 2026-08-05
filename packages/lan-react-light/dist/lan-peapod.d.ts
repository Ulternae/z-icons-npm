import React from 'react';

export interface LanPeapodProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeapod(props: LanPeapodProps): React.ReactElement;
export default LanPeapod;
