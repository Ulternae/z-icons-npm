import React from 'react';

export interface LanNoteSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNoteSolid: React.FC<LanNoteSolidProps>;
export default LanNoteSolid;
