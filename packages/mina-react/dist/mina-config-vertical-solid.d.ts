import React from 'react';

export interface MinaConfigVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaConfigVerticalSolid(props: MinaConfigVerticalSolidProps): React.ReactElement;
export default MinaConfigVerticalSolid;
