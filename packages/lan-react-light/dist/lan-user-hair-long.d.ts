import React from 'react';

export interface LanUserHairLongProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserHairLong(props: LanUserHairLongProps): React.ReactElement;
export default LanUserHairLong;
