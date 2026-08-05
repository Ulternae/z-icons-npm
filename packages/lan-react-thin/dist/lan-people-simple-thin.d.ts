import React from 'react';

export interface LanPeopleSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleSimpleThin(props: LanPeopleSimpleThinProps): React.ReactElement;
export default LanPeopleSimpleThin;
