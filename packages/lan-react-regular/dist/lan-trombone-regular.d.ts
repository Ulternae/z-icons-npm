import React from 'react';

export interface LanTromboneRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTromboneRegular(props: LanTromboneRegularProps): React.ReactElement;
export default LanTromboneRegular;
