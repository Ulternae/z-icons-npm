import React from 'react';

export interface MinaRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRectangle(props: MinaRectangleProps): React.ReactElement;
export default MinaRectangle;
