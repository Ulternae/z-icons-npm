import React from 'react';

export interface MinaCastScreenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaCastScreenSolid: React.FC<MinaCastScreenSolidProps>;
export default MinaCastScreenSolid;
