import React from 'react';

export interface LanLineHeightThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLineHeightThin(props: LanLineHeightThinProps): React.ReactElement;
export default LanLineHeightThin;
