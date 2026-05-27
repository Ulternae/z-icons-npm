import React from 'react';

export interface CoreGaugeSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const CoreGaugeSolid: React.FC<CoreGaugeSolidProps>;
export default CoreGaugeSolid;
