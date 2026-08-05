import React from 'react';

export interface LanCarSideBoltRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarSideBoltRegular(props: LanCarSideBoltRegularProps): React.ReactElement;
export default LanCarSideBoltRegular;
