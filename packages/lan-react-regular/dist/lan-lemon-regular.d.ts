import React from 'react';

export interface LanLemonRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLemonRegular(props: LanLemonRegularProps): React.ReactElement;
export default LanLemonRegular;
