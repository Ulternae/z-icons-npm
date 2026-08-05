import React from 'react';

export interface LanRvProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRv(props: LanRvProps): React.ReactElement;
export default LanRv;
