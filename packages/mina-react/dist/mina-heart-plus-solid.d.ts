import React from 'react';

export interface MinaHeartPlusSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartPlusSolid(props: MinaHeartPlusSolidProps): React.ReactElement;
export default MinaHeartPlusSolid;
