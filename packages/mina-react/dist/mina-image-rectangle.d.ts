import React from 'react';

export interface MinaImageRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaImageRectangle(props: MinaImageRectangleProps): React.ReactElement;
export default MinaImageRectangle;
