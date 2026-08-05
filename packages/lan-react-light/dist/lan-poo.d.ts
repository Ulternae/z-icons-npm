import React from 'react';

export interface LanPooProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoo(props: LanPooProps): React.ReactElement;
export default LanPoo;
