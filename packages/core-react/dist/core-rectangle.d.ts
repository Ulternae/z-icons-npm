import React from 'react';

export interface CoreRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreRectangle(props: CoreRectangleProps): React.ReactElement;
export default CoreRectangle;
