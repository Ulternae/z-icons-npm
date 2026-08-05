import React from 'react';

export interface LanPeopleCarryBoxProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleCarryBox(props: LanPeopleCarryBoxProps): React.ReactElement;
export default LanPeopleCarryBox;
