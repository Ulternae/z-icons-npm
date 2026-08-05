import React from 'react';

export interface MinaUserCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaUserCheckSolid(props: MinaUserCheckSolidProps): React.ReactElement;
export default MinaUserCheckSolid;
