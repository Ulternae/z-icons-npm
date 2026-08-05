import React from 'react';

export interface MinaPathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPathSolid(props: MinaPathSolidProps): React.ReactElement;
export default MinaPathSolid;
