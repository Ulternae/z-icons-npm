import React from 'react';

export interface LanPigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPig(props: LanPigProps): React.ReactElement;
export default LanPig;
