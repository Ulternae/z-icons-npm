import React from 'react';

export interface LanHatBeachProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatBeach(props: LanHatBeachProps): React.ReactElement;
export default LanHatBeach;
