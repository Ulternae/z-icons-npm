import React from 'react';

export interface LanPeopleGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleGroupRegular(props: LanPeopleGroupRegularProps): React.ReactElement;
export default LanPeopleGroupRegular;
