import React from 'react';

export interface LanLessThanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLessThan(props: LanLessThanProps): React.ReactElement;
export default LanLessThan;
