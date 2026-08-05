import React from 'react';

export interface LanDonutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDonutRegular(props: LanDonutRegularProps): React.ReactElement;
export default LanDonutRegular;
