import React from 'react';

export interface MinaBaseballSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBaseballSolid(props: MinaBaseballSolidProps): React.ReactElement;
export default MinaBaseballSolid;
