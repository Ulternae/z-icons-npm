import React from 'react';

export interface LanInputNumericThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanInputNumericThin(props: LanInputNumericThinProps): React.ReactElement;
export default LanInputNumericThin;
