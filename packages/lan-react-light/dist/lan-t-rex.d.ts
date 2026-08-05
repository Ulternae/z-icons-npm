import React from 'react';

export interface LanTRexProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTRex(props: LanTRexProps): React.ReactElement;
export default LanTRex;
