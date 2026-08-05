import React from 'react';

export interface NeoRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoRectangleVerticalSolid(props: NeoRectangleVerticalSolidProps): React.ReactElement;
export default NeoRectangleVerticalSolid;
