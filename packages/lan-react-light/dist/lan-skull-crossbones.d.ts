import React from 'react';

export interface LanSkullCrossbonesProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSkullCrossbones(props: LanSkullCrossbonesProps): React.ReactElement;
export default LanSkullCrossbones;
