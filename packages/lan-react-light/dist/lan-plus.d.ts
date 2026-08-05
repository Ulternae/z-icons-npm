import React from 'react';

export interface LanPlusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlus(props: LanPlusProps): React.ReactElement;
export default LanPlus;
