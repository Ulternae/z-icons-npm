import React from 'react';

export interface LanFaceDottedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceDotted: React.FC<LanFaceDottedProps>;
export default LanFaceDotted;
