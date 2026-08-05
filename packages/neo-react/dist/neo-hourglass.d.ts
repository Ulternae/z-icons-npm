import React from 'react';

export interface NeoHourglassProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoHourglass(props: NeoHourglassProps): React.ReactElement;
export default NeoHourglass;
