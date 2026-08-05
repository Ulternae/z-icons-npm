import React from 'react';

export interface LanPlusSquareThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlusSquareThin(props: LanPlusSquareThinProps): React.ReactElement;
export default LanPlusSquareThin;
