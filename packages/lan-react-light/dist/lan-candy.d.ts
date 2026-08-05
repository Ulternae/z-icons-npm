import React from 'react';

export interface LanCandyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCandy(props: LanCandyProps): React.ReactElement;
export default LanCandy;
