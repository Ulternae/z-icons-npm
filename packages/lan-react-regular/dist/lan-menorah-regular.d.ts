import React from 'react';

export interface LanMenorahRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMenorahRegular(props: LanMenorahRegularProps): React.ReactElement;
export default LanMenorahRegular;
