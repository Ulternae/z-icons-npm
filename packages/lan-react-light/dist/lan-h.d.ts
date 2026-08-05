import React from 'react';

export interface LanHProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanH(props: LanHProps): React.ReactElement;
export default LanH;
