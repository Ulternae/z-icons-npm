import React from 'react';

export interface NeoDesktopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoDesktopSolid(props: NeoDesktopSolidProps): React.ReactElement;
export default NeoDesktopSolid;
