import React from 'react';

export interface LanDragonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDragonRegular(props: LanDragonRegularProps): React.ReactElement;
export default LanDragonRegular;
