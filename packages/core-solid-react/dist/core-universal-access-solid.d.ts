import React from 'react';

export interface CoreUniversalAccessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUniversalAccessSolid(props: CoreUniversalAccessSolidProps): React.ReactElement;
export default CoreUniversalAccessSolid;
