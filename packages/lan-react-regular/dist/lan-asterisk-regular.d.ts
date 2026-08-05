import React from 'react';

export interface LanAsteriskRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAsteriskRegular(props: LanAsteriskRegularProps): React.ReactElement;
export default LanAsteriskRegular;
