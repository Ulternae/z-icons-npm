import React from 'react';

export interface CorePlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CorePlusSolid(props: CorePlusSolidProps): React.ReactElement;
export default CorePlusSolid;
