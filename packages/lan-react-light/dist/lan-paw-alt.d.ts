import React from 'react';

export interface LanPawAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPawAlt(props: LanPawAltProps): React.ReactElement;
export default LanPawAlt;
