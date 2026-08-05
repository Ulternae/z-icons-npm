import React from 'react';

export interface LanSquare9Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare9(props: LanSquare9Props): React.ReactElement;
export default LanSquare9;
