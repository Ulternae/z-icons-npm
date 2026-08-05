import React from 'react';

export interface LanInputNumericSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputNumericSolid(props: LanInputNumericSolidProps): React.ReactElement;
export default LanInputNumericSolid;
