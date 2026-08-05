import React from 'react';

export interface LanCarBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBoltRegular(props: LanCarBoltRegularProps): React.ReactElement;
export default LanCarBoltRegular;
