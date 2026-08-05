import React from 'react';

export interface MinaSquareDashedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareDashedSolid(props: MinaSquareDashedSolidProps): React.ReactElement;
export default MinaSquareDashedSolid;
