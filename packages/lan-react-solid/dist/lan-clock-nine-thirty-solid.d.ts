import React from 'react';

export interface LanClockNineThirtySolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanClockNineThirtySolid(props: LanClockNineThirtySolidProps): React.ReactElement;
export default LanClockNineThirtySolid;
