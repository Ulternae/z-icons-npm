import React from 'react';

export interface LanCrateEmptyRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCrateEmptyRegular(props: LanCrateEmptyRegularProps): React.ReactElement;
export default LanCrateEmptyRegular;
