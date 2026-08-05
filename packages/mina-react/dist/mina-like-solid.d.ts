import React from 'react';

export interface MinaLikeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLikeSolid(props: MinaLikeSolidProps): React.ReactElement;
export default MinaLikeSolid;
