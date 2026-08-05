import React from 'react';

export interface NeoArrowLeftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowLeft(props: NeoArrowLeftProps): React.ReactElement;
export default NeoArrowLeft;
