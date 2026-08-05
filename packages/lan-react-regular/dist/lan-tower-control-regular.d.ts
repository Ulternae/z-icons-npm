import React from 'react';

export interface LanTowerControlRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTowerControlRegular(props: LanTowerControlRegularProps): React.ReactElement;
export default LanTowerControlRegular;
