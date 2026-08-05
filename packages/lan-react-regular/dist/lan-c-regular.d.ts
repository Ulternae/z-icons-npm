import React from 'react';

export interface LanCRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCRegular(props: LanCRegularProps): React.ReactElement;
export default LanCRegular;
