import React from 'react';

export interface LanDialMedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDialMedRegular(props: LanDialMedRegularProps): React.ReactElement;
export default LanDialMedRegular;
