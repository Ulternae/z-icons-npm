import React from 'react';

export interface CoreTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTreeSolid(props: CoreTreeSolidProps): React.ReactElement;
export default CoreTreeSolid;
