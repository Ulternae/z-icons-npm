import React from 'react';

export interface LanPeanutProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeanut(props: LanPeanutProps): React.ReactElement;
export default LanPeanut;
