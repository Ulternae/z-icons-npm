import React from 'react';

export interface LanRepeatAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRepeatAlt(props: LanRepeatAltProps): React.ReactElement;
export default LanRepeatAlt;
