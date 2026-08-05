import React from 'react';

export interface LanTireFlatThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTireFlatThin(props: LanTireFlatThinProps): React.ReactElement;
export default LanTireFlatThin;
