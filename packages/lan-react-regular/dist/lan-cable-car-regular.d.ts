import React from 'react';

export interface LanCableCarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCableCarRegular(props: LanCableCarRegularProps): React.ReactElement;
export default LanCableCarRegular;
