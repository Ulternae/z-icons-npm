import React from 'react';

export interface MinaBookOpenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaBookOpenSolid(props: MinaBookOpenSolidProps): React.ReactElement;
export default MinaBookOpenSolid;
