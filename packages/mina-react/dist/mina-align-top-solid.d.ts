import React from 'react';

export interface MinaAlignTopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaAlignTopSolid(props: MinaAlignTopSolidProps): React.ReactElement;
export default MinaAlignTopSolid;
