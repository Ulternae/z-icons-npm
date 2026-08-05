import React from 'react';

export interface LanHammerWarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHammerWarRegular(props: LanHammerWarRegularProps): React.ReactElement;
export default LanHammerWarRegular;
