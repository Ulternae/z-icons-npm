import React from 'react';

export interface LanCentSignRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCentSignRegular(props: LanCentSignRegularProps): React.ReactElement;
export default LanCentSignRegular;
