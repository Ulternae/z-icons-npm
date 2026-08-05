import React from 'react';

export interface LanPantsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPantsThin(props: LanPantsThinProps): React.ReactElement;
export default LanPantsThin;
