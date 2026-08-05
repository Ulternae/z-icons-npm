import React from 'react';

export interface NeoArrowsRotateSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoArrowsRotateSolid(props: NeoArrowsRotateSolidProps): React.ReactElement;
export default NeoArrowsRotateSolid;
