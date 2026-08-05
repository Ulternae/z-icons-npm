import React from 'react';

export interface LanKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanKey(props: LanKeyProps): React.ReactElement;
export default LanKey;
