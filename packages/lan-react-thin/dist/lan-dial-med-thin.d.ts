import React from 'react';

export interface LanDialMedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMedThin(props: LanDialMedThinProps): React.ReactElement;
export default LanDialMedThin;
