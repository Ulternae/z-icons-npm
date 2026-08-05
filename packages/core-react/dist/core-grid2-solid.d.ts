import React from 'react';

export interface CoreGrid2SolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreGrid2Solid(props: CoreGrid2SolidProps): React.ReactElement;
export default CoreGrid2Solid;
