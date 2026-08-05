import React from 'react';

export interface LanPearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPear(props: LanPearProps): React.ReactElement;
export default LanPear;
