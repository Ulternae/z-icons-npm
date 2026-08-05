import React from 'react';

export interface LanLycheeProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLychee(props: LanLycheeProps): React.ReactElement;
export default LanLychee;
