import React from 'react';

export interface LanCarBoltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBoltThin(props: LanCarBoltThinProps): React.ReactElement;
export default LanCarBoltThin;
