import React from 'react';

export interface NeoArrowRotateLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowRotateLeft(props: NeoArrowRotateLeftProps): React.ReactElement;
export default NeoArrowRotateLeft;
