import React from 'react';

export interface LanZzzProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanZzz(props: LanZzzProps): React.ReactElement;
export default LanZzz;
