import React from 'react';

export interface LanCatRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCatRegular(props: LanCatRegularProps): React.ReactElement;
export default LanCatRegular;
