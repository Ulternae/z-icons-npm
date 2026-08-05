import React from 'react';

export interface MinaPasswordSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaPasswordSolid(props: MinaPasswordSolidProps): React.ReactElement;
export default MinaPasswordSolid;
