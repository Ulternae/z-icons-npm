import React from 'react';

export interface LanRocketRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketRegular(props: LanRocketRegularProps): React.ReactElement;
export default LanRocketRegular;
