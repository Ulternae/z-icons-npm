import React from 'react';

export interface LanKProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanK(props: LanKProps): React.ReactElement;
export default LanK;
