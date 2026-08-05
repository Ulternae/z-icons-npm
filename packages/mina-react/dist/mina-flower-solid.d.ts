import React from 'react';

export interface MinaFlowerSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaFlowerSolid(props: MinaFlowerSolidProps): React.ReactElement;
export default MinaFlowerSolid;
