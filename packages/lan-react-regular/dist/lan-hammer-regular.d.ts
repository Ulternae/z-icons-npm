import React from 'react';

export interface LanHammerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerRegular(props: LanHammerRegularProps): React.ReactElement;
export default LanHammerRegular;
