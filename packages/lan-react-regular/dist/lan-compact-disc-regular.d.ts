import React from 'react';

export interface LanCompactDiscRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCompactDiscRegular(props: LanCompactDiscRegularProps): React.ReactElement;
export default LanCompactDiscRegular;
