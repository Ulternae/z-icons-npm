import React from 'react';

export interface MinaBookCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookCheckSolid(props: MinaBookCheckSolidProps): React.ReactElement;
export default MinaBookCheckSolid;
