import React from 'react';

export interface MinaHeartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartSolid(props: MinaHeartSolidProps): React.ReactElement;
export default MinaHeartSolid;
