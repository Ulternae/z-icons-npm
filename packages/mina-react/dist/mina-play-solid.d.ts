import React from 'react';

export interface MinaPlaySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPlaySolid(props: MinaPlaySolidProps): React.ReactElement;
export default MinaPlaySolid;
