import React from 'react';

export interface LanSquareTProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareT(props: LanSquareTProps): React.ReactElement;
export default LanSquareT;
