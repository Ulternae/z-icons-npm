import React from 'react';

export interface LanMicrowaveRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMicrowaveRegular(props: LanMicrowaveRegularProps): React.ReactElement;
export default LanMicrowaveRegular;
