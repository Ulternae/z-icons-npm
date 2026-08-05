import React from 'react';

export interface LanSwordLaserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSwordLaserRegular(props: LanSwordLaserRegularProps): React.ReactElement;
export default LanSwordLaserRegular;
