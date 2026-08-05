import React from 'react';

export interface LanPeopleSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleSimple(props: LanPeopleSimpleProps): React.ReactElement;
export default LanPeopleSimple;
