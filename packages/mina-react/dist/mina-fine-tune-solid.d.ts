import React from 'react';

export interface MinaFineTuneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFineTuneSolid(props: MinaFineTuneSolidProps): React.ReactElement;
export default MinaFineTuneSolid;
