import React from 'react';

export interface MinaSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSidebarSolid(props: MinaSidebarSolidProps): React.ReactElement;
export default MinaSidebarSolid;
