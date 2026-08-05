import React from 'react';

export interface LanLessThanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLessThanRegular(props: LanLessThanRegularProps): React.ReactElement;
export default LanLessThanRegular;
