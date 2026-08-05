import React from 'react';

export interface NeoArrowDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowDown(props: NeoArrowDownProps): React.ReactElement;
export default NeoArrowDown;
