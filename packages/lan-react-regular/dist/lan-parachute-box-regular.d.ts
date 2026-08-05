import React from 'react';

export interface LanParachuteBoxRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanParachuteBoxRegular(props: LanParachuteBoxRegularProps): React.ReactElement;
export default LanParachuteBoxRegular;
