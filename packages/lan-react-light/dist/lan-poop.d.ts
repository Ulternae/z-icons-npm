import React from 'react';

export interface LanPoopProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPoop(props: LanPoopProps): React.ReactElement;
export default LanPoop;
