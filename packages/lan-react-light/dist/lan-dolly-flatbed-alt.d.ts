import React from 'react';

export interface LanDollyFlatbedAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDollyFlatbedAlt(props: LanDollyFlatbedAltProps): React.ReactElement;
export default LanDollyFlatbedAlt;
