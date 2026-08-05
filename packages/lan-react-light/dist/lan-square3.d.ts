import React from 'react';

export interface LanSquare3Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare3(props: LanSquare3Props): React.ReactElement;
export default LanSquare3;
