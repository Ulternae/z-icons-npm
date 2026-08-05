import React from 'react';

export interface LanWindowAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanWindowAlt(props: LanWindowAltProps): React.ReactElement;
export default LanWindowAlt;
