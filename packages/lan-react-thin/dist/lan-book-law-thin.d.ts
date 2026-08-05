import React from 'react';

export interface LanBookLawThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookLawThin(props: LanBookLawThinProps): React.ReactElement;
export default LanBookLawThin;
