import React from 'react';

export interface LanRepeatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepeat(props: LanRepeatProps): React.ReactElement;
export default LanRepeat;
