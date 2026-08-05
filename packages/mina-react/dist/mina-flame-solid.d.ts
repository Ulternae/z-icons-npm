import React from 'react';

export interface MinaFlameSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlameSolid(props: MinaFlameSolidProps): React.ReactElement;
export default MinaFlameSolid;
