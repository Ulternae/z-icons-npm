import React from 'react';

export interface LanPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleRegular(props: LanPeopleRegularProps): React.ReactElement;
export default LanPeopleRegular;
