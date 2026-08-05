import React from 'react';

export interface LanPeopleGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleGroupThin(props: LanPeopleGroupThinProps): React.ReactElement;
export default LanPeopleGroupThin;
