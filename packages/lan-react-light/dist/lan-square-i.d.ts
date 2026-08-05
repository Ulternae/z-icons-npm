import React from 'react';

export interface LanSquareIProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareI(props: LanSquareIProps): React.ReactElement;
export default LanSquareI;
