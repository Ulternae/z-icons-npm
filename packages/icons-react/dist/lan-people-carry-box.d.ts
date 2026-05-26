import React from 'react';

export interface LanPeopleCarryBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPeopleCarryBox: React.FC<LanPeopleCarryBoxProps>;
export default LanPeopleCarryBox;
