import React from 'react';

export interface MinaRupeeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaRupeeSolid(props: MinaRupeeSolidProps): React.ReactElement;
export default MinaRupeeSolid;
