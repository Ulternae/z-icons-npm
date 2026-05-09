import React from 'react';

export interface MinaSignalCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSignalCircleSolid: React.FC<MinaSignalCircleSolidProps>;
export default MinaSignalCircleSolid;
