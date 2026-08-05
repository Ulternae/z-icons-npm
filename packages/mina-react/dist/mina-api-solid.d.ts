import React from 'react';

export interface MinaApiSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaApiSolid(props: MinaApiSolidProps): React.ReactElement;
export default MinaApiSolid;
