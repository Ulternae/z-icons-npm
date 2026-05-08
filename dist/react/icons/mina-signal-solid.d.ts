import React from 'react';

export interface MinaSignalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalSolid: React.FC<MinaSignalSolidProps>;
export default MinaSignalSolid;
