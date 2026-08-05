import React from 'react';

export interface LanPeanutsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanutsThin(props: LanPeanutsThinProps): React.ReactElement;
export default LanPeanutsThin;
