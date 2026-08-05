import React from 'react';

export interface LanPersonPrayingRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPrayingRegular(props: LanPersonPrayingRegularProps): React.ReactElement;
export default LanPersonPrayingRegular;
