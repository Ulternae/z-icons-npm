import React from 'react';

export interface LanStarAndCrescentProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStarAndCrescent(props: LanStarAndCrescentProps): React.ReactElement;
export default LanStarAndCrescent;
