import React from 'react';

export interface LanCrownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrownThin(props: LanCrownThinProps): React.ReactElement;
export default LanCrownThin;
