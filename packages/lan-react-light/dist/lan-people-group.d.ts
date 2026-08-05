import React from 'react';

export interface LanPeopleGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleGroup(props: LanPeopleGroupProps): React.ReactElement;
export default LanPeopleGroup;
