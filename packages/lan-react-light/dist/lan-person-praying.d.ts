import React from 'react';

export interface LanPersonPrayingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPraying(props: LanPersonPrayingProps): React.ReactElement;
export default LanPersonPraying;
