import React from 'react';

export interface LanFalafelThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFalafelThin(props: LanFalafelThinProps): React.ReactElement;
export default LanFalafelThin;
