import React from 'react';

export interface LanInputNumericRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputNumericRegular(props: LanInputNumericRegularProps): React.ReactElement;
export default LanInputNumericRegular;
