import React from 'react';

export interface CoreXmarkSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreXmarkSolid(props: CoreXmarkSolidProps): React.ReactElement;
export default CoreXmarkSolid;
