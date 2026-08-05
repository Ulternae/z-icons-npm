import React from 'react';

export interface LanLungsRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLungsRegular(props: LanLungsRegularProps): React.ReactElement;
export default LanLungsRegular;
