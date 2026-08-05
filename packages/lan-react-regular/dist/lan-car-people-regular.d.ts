import React from 'react';

export interface LanCarPeopleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarPeopleRegular(props: LanCarPeopleRegularProps): React.ReactElement;
export default LanCarPeopleRegular;
