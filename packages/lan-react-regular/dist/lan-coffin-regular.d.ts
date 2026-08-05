import React from 'react';

export interface LanCoffinRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCoffinRegular(props: LanCoffinRegularProps): React.ReactElement;
export default LanCoffinRegular;
