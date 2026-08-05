import React from 'react';

export interface LanFlagCheckeredProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagCheckered(props: LanFlagCheckeredProps): React.ReactElement;
export default LanFlagCheckered;
