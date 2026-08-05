import React from 'react';

export interface LanCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarRegular(props: LanCarRegularProps): React.ReactElement;
export default LanCarRegular;
