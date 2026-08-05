import React from 'react';

export interface LanPProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanP(props: LanPProps): React.ReactElement;
export default LanP;
