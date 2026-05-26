import React from 'react';

export interface LanPeopleSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleSimpleThin: React.FC<LanPeopleSimpleThinProps>;
export default LanPeopleSimpleThin;
