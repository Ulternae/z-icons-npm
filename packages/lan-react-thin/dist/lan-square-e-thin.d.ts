import React from 'react';

export interface LanSquareEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSquareEThin(props: LanSquareEThinProps): React.ReactElement;
export default LanSquareEThin;
