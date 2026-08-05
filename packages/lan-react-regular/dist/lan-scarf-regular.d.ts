import React from 'react';

export interface LanScarfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScarfRegular(props: LanScarfRegularProps): React.ReactElement;
export default LanScarfRegular;
