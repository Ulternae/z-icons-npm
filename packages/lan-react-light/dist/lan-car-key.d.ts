import React from 'react';

export interface LanCarKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCarKey(props: LanCarKeyProps): React.ReactElement;
export default LanCarKey;
