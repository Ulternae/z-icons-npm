import React from 'react';

export interface LanBuoyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBuoy(props: LanBuoyProps): React.ReactElement;
export default LanBuoy;
