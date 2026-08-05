import React from 'react';

export interface MinaInfoCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoCircleSolid(props: MinaInfoCircleSolidProps): React.ReactElement;
export default MinaInfoCircleSolid;
