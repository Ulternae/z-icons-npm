import React from 'react';

export interface LanSquare4Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare4(props: LanSquare4Props): React.ReactElement;
export default LanSquare4;
