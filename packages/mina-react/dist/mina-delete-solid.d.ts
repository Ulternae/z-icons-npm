import React from 'react';

export interface MinaDeleteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDeleteSolid(props: MinaDeleteSolidProps): React.ReactElement;
export default MinaDeleteSolid;
