import React from 'react';

export interface CorePlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlaySolid(props: CorePlaySolidProps): React.ReactElement;
export default CorePlaySolid;
