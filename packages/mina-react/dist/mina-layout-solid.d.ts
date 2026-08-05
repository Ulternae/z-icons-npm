import React from 'react';

export interface MinaLayoutSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaLayoutSolid(props: MinaLayoutSolidProps): React.ReactElement;
export default MinaLayoutSolid;
