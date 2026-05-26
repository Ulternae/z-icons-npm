import React from 'react';

export interface LanPeopleCarryBoxThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleCarryBoxThin: React.FC<LanPeopleCarryBoxThinProps>;
export default LanPeopleCarryBoxThin;
