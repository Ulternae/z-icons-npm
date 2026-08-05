import React from 'react';

export interface NeoRectangleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangle(props: NeoRectangleProps): React.ReactElement;
export default NeoRectangle;
