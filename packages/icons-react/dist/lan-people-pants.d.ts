import React from 'react';

export interface LanPeoplePantsProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePants: React.FC<LanPeoplePantsProps>;
export default LanPeoplePants;
