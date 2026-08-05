import React from 'react';

export interface MinaTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTwoSolid(props: MinaTwoSolidProps): React.ReactElement;
export default MinaTwoSolid;
