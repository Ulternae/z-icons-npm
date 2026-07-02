import React from 'react';

export interface CoreCarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCarSolid(props: CoreCarSolidProps): React.ReactElement;
export default CoreCarSolid;
