import React from 'react';

export interface LanPeopleLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPeopleLineRegular(props: LanPeopleLineRegularProps): React.ReactElement;
export default LanPeopleLineRegular;
