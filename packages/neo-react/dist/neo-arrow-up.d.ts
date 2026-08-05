import React from 'react';

export interface NeoArrowUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowUp(props: NeoArrowUpProps): React.ReactElement;
export default NeoArrowUp;
