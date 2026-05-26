import React from 'react';

export interface LanFaceLaughProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceLaugh: React.FC<LanFaceLaughProps>;
export default LanFaceLaugh;
