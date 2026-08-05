import React from 'react';

export interface MinaUserXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserXSolid(props: MinaUserXSolidProps): React.ReactElement;
export default MinaUserXSolid;
