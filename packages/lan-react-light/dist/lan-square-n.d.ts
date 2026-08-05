import React from 'react';

export interface LanSquareNProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareN(props: LanSquareNProps): React.ReactElement;
export default LanSquareN;
