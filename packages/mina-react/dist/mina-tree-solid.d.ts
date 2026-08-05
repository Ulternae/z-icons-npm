import React from 'react';

export interface MinaTreeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaTreeSolid(props: MinaTreeSolidProps): React.ReactElement;
export default MinaTreeSolid;
