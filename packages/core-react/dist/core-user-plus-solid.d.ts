import React from 'react';

export interface CoreUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function CoreUserPlusSolid(props: CoreUserPlusSolidProps): React.ReactElement;
export default CoreUserPlusSolid;
