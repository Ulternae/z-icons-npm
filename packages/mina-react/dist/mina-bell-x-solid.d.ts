import React from 'react';

export interface MinaBellXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBellXSolid(props: MinaBellXSolidProps): React.ReactElement;
export default MinaBellXSolid;
