import React from 'react';

export interface MinaTentSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTentSolid(props: MinaTentSolidProps): React.ReactElement;
export default MinaTentSolid;
