import React from 'react';

export interface LanTireFlatProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireFlat(props: LanTireFlatProps): React.ReactElement;
export default LanTireFlat;
