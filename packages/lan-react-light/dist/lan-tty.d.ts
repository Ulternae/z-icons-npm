import React from 'react';

export interface LanTtyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTty(props: LanTtyProps): React.ReactElement;
export default LanTty;
