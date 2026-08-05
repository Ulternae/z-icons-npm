import React from 'react';

export interface LanDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDesk(props: LanDeskProps): React.ReactElement;
export default LanDesk;
