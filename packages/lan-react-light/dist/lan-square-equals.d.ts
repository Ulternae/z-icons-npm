import React from 'react';

export interface LanSquareEqualsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEquals(props: LanSquareEqualsProps): React.ReactElement;
export default LanSquareEquals;
