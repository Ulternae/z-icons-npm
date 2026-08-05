import React from 'react';

export interface MinaCastScreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaCastScreenSolid(props: MinaCastScreenSolidProps): React.ReactElement;
export default MinaCastScreenSolid;
