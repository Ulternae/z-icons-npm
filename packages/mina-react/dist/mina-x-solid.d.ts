import React from 'react';

export interface MinaXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaXSolid(props: MinaXSolidProps): React.ReactElement;
export default MinaXSolid;
