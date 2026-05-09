import React from 'react';

export interface MinaMoveVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaMoveVerticalSolid: React.FC<MinaMoveVerticalSolidProps>;
export default MinaMoveVerticalSolid;
