import React from 'react';

export interface LanSquareYProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareY(props: LanSquareYProps): React.ReactElement;
export default LanSquareY;
