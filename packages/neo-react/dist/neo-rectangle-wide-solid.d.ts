import React from 'react';

export interface NeoRectangleWideSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleWideSolid(props: NeoRectangleWideSolidProps): React.ReactElement;
export default NeoRectangleWideSolid;
