import React from 'react';

export interface LanCornerRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCornerRegular(props: LanCornerRegularProps): React.ReactElement;
export default LanCornerRegular;
