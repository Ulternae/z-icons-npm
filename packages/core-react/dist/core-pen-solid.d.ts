import React from 'react';

export interface CorePenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePenSolid(props: CorePenSolidProps): React.ReactElement;
export default CorePenSolid;
