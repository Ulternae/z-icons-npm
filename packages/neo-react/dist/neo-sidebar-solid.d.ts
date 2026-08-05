import React from 'react';

export interface NeoSidebarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSidebarSolid(props: NeoSidebarSolidProps): React.ReactElement;
export default NeoSidebarSolid;
