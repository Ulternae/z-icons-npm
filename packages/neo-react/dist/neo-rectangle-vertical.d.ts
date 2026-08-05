import React from 'react';

export interface NeoRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleVertical(props: NeoRectangleVerticalProps): React.ReactElement;
export default NeoRectangleVertical;
