import React from 'react';

export interface MinaCartXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCartXSolid(props: MinaCartXSolidProps): React.ReactElement;
export default MinaCartXSolid;
