import React from 'react';

export interface MinaToolSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaToolSolid(props: MinaToolSolidProps): React.ReactElement;
export default MinaToolSolid;
