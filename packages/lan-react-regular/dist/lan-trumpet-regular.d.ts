import React from 'react';

export interface LanTrumpetRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTrumpetRegular(props: LanTrumpetRegularProps): React.ReactElement;
export default LanTrumpetRegular;
