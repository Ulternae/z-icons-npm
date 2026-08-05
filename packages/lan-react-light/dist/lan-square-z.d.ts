import React from 'react';

export interface LanSquareZProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareZ(props: LanSquareZProps): React.ReactElement;
export default LanSquareZ;
