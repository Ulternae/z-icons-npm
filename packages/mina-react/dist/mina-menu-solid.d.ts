import React from 'react';

export interface MinaMenuSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaMenuSolid(props: MinaMenuSolidProps): React.ReactElement;
export default MinaMenuSolid;
