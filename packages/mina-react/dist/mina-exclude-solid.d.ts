import React from 'react';

export interface MinaExcludeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaExcludeSolid(props: MinaExcludeSolidProps): React.ReactElement;
export default MinaExcludeSolid;
