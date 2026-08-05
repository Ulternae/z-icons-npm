import React from 'react';

export interface LanInputNumericProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputNumeric(props: LanInputNumericProps): React.ReactElement;
export default LanInputNumeric;
