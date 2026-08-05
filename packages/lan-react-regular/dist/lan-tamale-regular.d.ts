import React from 'react';

export interface LanTamaleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTamaleRegular(props: LanTamaleRegularProps): React.ReactElement;
export default LanTamaleRegular;
