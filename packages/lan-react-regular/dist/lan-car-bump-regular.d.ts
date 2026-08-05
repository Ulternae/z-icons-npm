import React from 'react';

export interface LanCarBumpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarBumpRegular(props: LanCarBumpRegularProps): React.ReactElement;
export default LanCarBumpRegular;
