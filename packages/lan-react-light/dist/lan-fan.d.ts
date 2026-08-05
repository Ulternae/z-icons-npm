import React from 'react';

export interface LanFanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFan(props: LanFanProps): React.ReactElement;
export default LanFan;
