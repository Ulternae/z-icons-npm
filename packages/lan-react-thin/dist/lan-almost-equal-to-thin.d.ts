import React from 'react';

export interface LanAlmostEqualToThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAlmostEqualToThin(props: LanAlmostEqualToThinProps): React.ReactElement;
export default LanAlmostEqualToThin;
