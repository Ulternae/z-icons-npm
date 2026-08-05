import React from 'react';

export interface LanSquare8Props extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquare8(props: LanSquare8Props): React.ReactElement;
export default LanSquare8;
