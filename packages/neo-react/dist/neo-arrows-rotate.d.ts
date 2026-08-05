import React from 'react';

export interface NeoArrowsRotateProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowsRotate(props: NeoArrowsRotateProps): React.ReactElement;
export default NeoArrowsRotate;
