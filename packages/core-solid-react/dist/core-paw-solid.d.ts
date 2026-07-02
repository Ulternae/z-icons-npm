import React from 'react';

export interface CorePawSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePawSolid(props: CorePawSolidProps): React.ReactElement;
export default CorePawSolid;
