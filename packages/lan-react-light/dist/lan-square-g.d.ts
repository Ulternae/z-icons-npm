import React from 'react';

export interface LanSquareGProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareG(props: LanSquareGProps): React.ReactElement;
export default LanSquareG;
