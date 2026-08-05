import React from 'react';

export interface LanSquareWProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareW(props: LanSquareWProps): React.ReactElement;
export default LanSquareW;
