import React from 'react';

export interface LanScalpelRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScalpelRegular(props: LanScalpelRegularProps): React.ReactElement;
export default LanScalpelRegular;
