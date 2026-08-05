import React from 'react';

export interface LanRProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanR(props: LanRProps): React.ReactElement;
export default LanR;
