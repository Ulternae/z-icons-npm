import React from 'react';

export interface MinaHeartXSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaHeartXSolid(props: MinaHeartXSolidProps): React.ReactElement;
export default MinaHeartXSolid;
