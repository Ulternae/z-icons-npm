import React from 'react';

export interface LanFaceMeltingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFaceMeltingThin: React.FC<LanFaceMeltingThinProps>;
export default LanFaceMeltingThin;
