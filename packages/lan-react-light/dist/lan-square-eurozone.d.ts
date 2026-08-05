import React from 'react';

export interface LanSquareEurozoneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEurozone(props: LanSquareEurozoneProps): React.ReactElement;
export default LanSquareEurozone;
