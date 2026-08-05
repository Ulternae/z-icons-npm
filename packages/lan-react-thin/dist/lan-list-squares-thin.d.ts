import React from 'react';

export interface LanListSquaresThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanListSquaresThin(props: LanListSquaresThinProps): React.ReactElement;
export default LanListSquaresThin;
