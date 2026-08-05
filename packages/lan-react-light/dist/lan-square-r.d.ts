import React from 'react';

export interface LanSquareRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareR(props: LanSquareRProps): React.ReactElement;
export default LanSquareR;
