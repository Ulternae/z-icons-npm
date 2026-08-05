import React from 'react';

export interface LanRocketLaunchRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketLaunchRegular(props: LanRocketLaunchRegularProps): React.ReactElement;
export default LanRocketLaunchRegular;
