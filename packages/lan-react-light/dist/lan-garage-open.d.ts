import React from 'react';

export interface LanGarageOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGarageOpen(props: LanGarageOpenProps): React.ReactElement;
export default LanGarageOpen;
