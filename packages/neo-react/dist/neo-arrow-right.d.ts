import React from 'react';

export interface NeoArrowRightProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowRight(props: NeoArrowRightProps): React.ReactElement;
export default NeoArrowRight;
