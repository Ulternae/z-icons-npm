import React from 'react';

export interface LanMemoPadProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMemoPad(props: LanMemoPadProps): React.ReactElement;
export default LanMemoPad;
