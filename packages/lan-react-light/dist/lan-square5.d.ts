import React from 'react';

export interface LanSquare5Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare5(props: LanSquare5Props): React.ReactElement;
export default LanSquare5;
