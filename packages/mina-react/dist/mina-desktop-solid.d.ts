import React from 'react';

export interface MinaDesktopSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaDesktopSolid(props: MinaDesktopSolidProps): React.ReactElement;
export default MinaDesktopSolid;
