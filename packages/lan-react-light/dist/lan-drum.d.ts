import React from 'react';

export interface LanDrumProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDrum(props: LanDrumProps): React.ReactElement;
export default LanDrum;
