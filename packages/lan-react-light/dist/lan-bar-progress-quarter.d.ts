import React from 'react';

export interface LanBarProgressQuarterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarProgressQuarter(props: LanBarProgressQuarterProps): React.ReactElement;
export default LanBarProgressQuarter;
