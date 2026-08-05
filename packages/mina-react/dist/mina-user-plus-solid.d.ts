import React from 'react';

export interface MinaUserPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserPlusSolid(props: MinaUserPlusSolidProps): React.ReactElement;
export default MinaUserPlusSolid;
