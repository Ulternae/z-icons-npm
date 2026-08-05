import React from 'react';

export interface MinaRectangleVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRectangleVerticalSolid(props: MinaRectangleVerticalSolidProps): React.ReactElement;
export default MinaRectangleVerticalSolid;
