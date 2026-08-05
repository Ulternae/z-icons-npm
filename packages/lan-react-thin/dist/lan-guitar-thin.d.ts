import React from 'react';

export interface LanGuitarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGuitarThin(props: LanGuitarThinProps): React.ReactElement;
export default LanGuitarThin;
