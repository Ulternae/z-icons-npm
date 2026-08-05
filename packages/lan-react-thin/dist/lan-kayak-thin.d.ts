import React from 'react';

export interface LanKayakThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKayakThin(props: LanKayakThinProps): React.ReactElement;
export default LanKayakThin;
