import React from 'react';

export interface LanFaceFrownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceFrownThin(props: LanFaceFrownThinProps): React.ReactElement;
export default LanFaceFrownThin;
