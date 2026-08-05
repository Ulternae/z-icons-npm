import React from 'react';

export interface MinaShareSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaShareSolid(props: MinaShareSolidProps): React.ReactElement;
export default MinaShareSolid;
