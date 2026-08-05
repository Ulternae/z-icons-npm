import React from 'react';

export interface LanPeopleSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleSimpleRegular(props: LanPeopleSimpleRegularProps): React.ReactElement;
export default LanPeopleSimpleRegular;
