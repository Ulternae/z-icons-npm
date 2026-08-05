import React from 'react';

export interface LanCarAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarAlt(props: LanCarAltProps): React.ReactElement;
export default LanCarAlt;
