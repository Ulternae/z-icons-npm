import React from 'react';

export interface LanMedalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMedalRegular(props: LanMedalRegularProps): React.ReactElement;
export default LanMedalRegular;
