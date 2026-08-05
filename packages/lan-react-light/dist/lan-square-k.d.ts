import React from 'react';

export interface LanSquareKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareK(props: LanSquareKProps): React.ReactElement;
export default LanSquareK;
