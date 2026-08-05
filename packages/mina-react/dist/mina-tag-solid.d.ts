import React from 'react';

export interface MinaTagSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTagSolid(props: MinaTagSolidProps): React.ReactElement;
export default MinaTagSolid;
