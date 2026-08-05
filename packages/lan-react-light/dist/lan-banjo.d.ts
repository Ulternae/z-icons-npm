import React from 'react';

export interface LanBanjoProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBanjo(props: LanBanjoProps): React.ReactElement;
export default LanBanjo;
