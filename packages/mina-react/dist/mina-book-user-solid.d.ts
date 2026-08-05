import React from 'react';

export interface MinaBookUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookUserSolid(props: MinaBookUserSolidProps): React.ReactElement;
export default MinaBookUserSolid;
