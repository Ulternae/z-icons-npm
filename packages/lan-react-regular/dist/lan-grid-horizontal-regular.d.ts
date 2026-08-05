import React from 'react';

export interface LanGridHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridHorizontalRegular(props: LanGridHorizontalRegularProps): React.ReactElement;
export default LanGridHorizontalRegular;
