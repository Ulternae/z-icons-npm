import React from 'react';

export interface LanCoconutRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoconutRegular(props: LanCoconutRegularProps): React.ReactElement;
export default LanCoconutRegular;
