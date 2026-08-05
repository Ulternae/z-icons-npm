import React from 'react';

export interface LanTurntableProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTurntable(props: LanTurntableProps): React.ReactElement;
export default LanTurntable;
