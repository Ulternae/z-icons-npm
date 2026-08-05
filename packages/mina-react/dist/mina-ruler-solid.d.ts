import React from 'react';

export interface MinaRulerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRulerSolid(props: MinaRulerSolidProps): React.ReactElement;
export default MinaRulerSolid;
