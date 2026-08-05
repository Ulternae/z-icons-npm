import React from 'react';

export interface MinaNavigationSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaNavigationSolid(props: MinaNavigationSolidProps): React.ReactElement;
export default MinaNavigationSolid;
