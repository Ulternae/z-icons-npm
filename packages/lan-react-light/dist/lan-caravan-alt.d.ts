import React from 'react';

export interface LanCaravanAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCaravanAlt(props: LanCaravanAltProps): React.ReactElement;
export default LanCaravanAlt;
