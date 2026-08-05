import React from 'react';

export interface NeoSidebarFlipSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoSidebarFlipSolid(props: NeoSidebarFlipSolidProps): React.ReactElement;
export default NeoSidebarFlipSolid;
