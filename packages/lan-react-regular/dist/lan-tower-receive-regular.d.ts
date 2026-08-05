import React from 'react';

export interface LanTowerReceiveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerReceiveRegular(props: LanTowerReceiveRegularProps): React.ReactElement;
export default LanTowerReceiveRegular;
