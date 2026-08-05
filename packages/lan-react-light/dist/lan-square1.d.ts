import React from 'react';

export interface LanSquare1Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare1(props: LanSquare1Props): React.ReactElement;
export default LanSquare1;
