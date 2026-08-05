import React from 'react';

export interface LanHousePersonLeaveProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHousePersonLeave(props: LanHousePersonLeaveProps): React.ReactElement;
export default LanHousePersonLeave;
