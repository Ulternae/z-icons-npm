import React from 'react';

export interface LanXProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanX(props: LanXProps): React.ReactElement;
export default LanX;
