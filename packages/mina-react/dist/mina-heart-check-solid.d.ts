import React from 'react';

export interface MinaHeartCheckSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartCheckSolid(props: MinaHeartCheckSolidProps): React.ReactElement;
export default MinaHeartCheckSolid;
