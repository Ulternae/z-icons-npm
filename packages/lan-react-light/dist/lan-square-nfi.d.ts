import React from 'react';

export interface LanSquareNfiProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareNfi(props: LanSquareNfiProps): React.ReactElement;
export default LanSquareNfi;
