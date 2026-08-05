import React from 'react';

export interface LanPersonPinballRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPinballRegular(props: LanPersonPinballRegularProps): React.ReactElement;
export default LanPersonPinballRegular;
