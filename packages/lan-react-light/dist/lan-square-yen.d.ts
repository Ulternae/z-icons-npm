import React from 'react';

export interface LanSquareYenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareYen(props: LanSquareYenProps): React.ReactElement;
export default LanSquareYen;
