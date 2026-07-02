import React from 'react';

export interface CoreRectangleVerticalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangleVertical(props: CoreRectangleVerticalProps): React.ReactElement;
export default CoreRectangleVertical;
