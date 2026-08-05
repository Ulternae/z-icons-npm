import React from 'react';

export interface LanGrid2MinusProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrid2Minus(props: LanGrid2MinusProps): React.ReactElement;
export default LanGrid2Minus;
