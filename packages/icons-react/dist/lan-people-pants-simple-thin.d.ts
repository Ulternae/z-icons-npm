import React from 'react';

export interface LanPeoplePantsSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeoplePantsSimpleThin: React.FC<LanPeoplePantsSimpleThinProps>;
export default LanPeoplePantsSimpleThin;
