import React from 'react';

export interface LanTickProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTick(props: LanTickProps): React.ReactElement;
export default LanTick;
