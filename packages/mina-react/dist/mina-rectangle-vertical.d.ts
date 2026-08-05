import React from 'react';

export interface MinaRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRectangleVertical(props: MinaRectangleVerticalProps): React.ReactElement;
export default MinaRectangleVertical;
