import React from 'react';

export interface MinaFireSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFireSolid(props: MinaFireSolidProps): React.ReactElement;
export default MinaFireSolid;
