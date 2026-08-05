import React from 'react';

export interface MinaInfoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaInfoSolid(props: MinaInfoSolidProps): React.ReactElement;
export default MinaInfoSolid;
