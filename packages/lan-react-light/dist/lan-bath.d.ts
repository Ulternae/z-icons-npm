import React from 'react';

export interface LanBathProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBath(props: LanBathProps): React.ReactElement;
export default LanBath;
