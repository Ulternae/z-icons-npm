import React from 'react';

export interface LanSquare2Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare2(props: LanSquare2Props): React.ReactElement;
export default LanSquare2;
