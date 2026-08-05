import React from 'react';

export interface LanBProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanB(props: LanBProps): React.ReactElement;
export default LanB;
