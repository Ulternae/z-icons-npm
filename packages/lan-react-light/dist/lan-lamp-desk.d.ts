import React from 'react';

export interface LanLampDeskProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanLampDesk(props: LanLampDeskProps): React.ReactElement;
export default LanLampDesk;
