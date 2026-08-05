import React from 'react';

export interface CoreMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreMapSolid(props: CoreMapSolidProps): React.ReactElement;
export default CoreMapSolid;
