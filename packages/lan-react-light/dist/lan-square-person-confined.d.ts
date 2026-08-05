import React from 'react';

export interface LanSquarePersonConfinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquarePersonConfined(props: LanSquarePersonConfinedProps): React.ReactElement;
export default LanSquarePersonConfined;
