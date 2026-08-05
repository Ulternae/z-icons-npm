import React from 'react';

export interface LanClockElevenSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockElevenSolid(props: LanClockElevenSolidProps): React.ReactElement;
export default LanClockElevenSolid;
