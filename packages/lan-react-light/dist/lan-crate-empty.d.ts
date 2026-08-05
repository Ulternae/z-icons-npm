import React from 'react';

export interface LanCrateEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrateEmpty(props: LanCrateEmptyProps): React.ReactElement;
export default LanCrateEmpty;
