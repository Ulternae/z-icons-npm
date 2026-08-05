import React from 'react';

export interface LanSuitcaseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSuitcaseRegular(props: LanSuitcaseRegularProps): React.ReactElement;
export default LanSuitcaseRegular;
