import React from 'react';

export interface LanBackpackProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackpack(props: LanBackpackProps): React.ReactElement;
export default LanBackpack;
