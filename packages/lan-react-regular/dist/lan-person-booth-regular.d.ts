import React from 'react';

export interface LanPersonBoothRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonBoothRegular(props: LanPersonBoothRegularProps): React.ReactElement;
export default LanPersonBoothRegular;
