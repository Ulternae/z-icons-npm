import React from 'react';

export interface CoreCompactDiscSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreCompactDiscSolid(props: CoreCompactDiscSolidProps): React.ReactElement;
export default CoreCompactDiscSolid;
