import React from 'react';

export interface MinaMinimizeOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMinimizeOneSolid(props: MinaMinimizeOneSolidProps): React.ReactElement;
export default MinaMinimizeOneSolid;
