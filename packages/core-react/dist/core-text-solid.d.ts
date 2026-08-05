import React from 'react';

export interface CoreTextSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreTextSolid(props: CoreTextSolidProps): React.ReactElement;
export default CoreTextSolid;
