import React from 'react';

export interface MinaMathSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMathSolid(props: MinaMathSolidProps): React.ReactElement;
export default MinaMathSolid;
