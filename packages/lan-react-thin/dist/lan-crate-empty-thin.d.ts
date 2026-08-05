import React from 'react';

export interface LanCrateEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrateEmptyThin(props: LanCrateEmptyThinProps): React.ReactElement;
export default LanCrateEmptyThin;
