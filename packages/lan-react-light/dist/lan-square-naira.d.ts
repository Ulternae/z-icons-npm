import React from 'react';

export interface LanSquareNairaProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNaira(props: LanSquareNairaProps): React.ReactElement;
export default LanSquareNaira;
