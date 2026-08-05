import React from 'react';

export interface LanFlagAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFlagAlt(props: LanFlagAltProps): React.ReactElement;
export default LanFlagAlt;
