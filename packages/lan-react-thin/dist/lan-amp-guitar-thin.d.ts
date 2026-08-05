import React from 'react';

export interface LanAmpGuitarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAmpGuitarThin(props: LanAmpGuitarThinProps): React.ReactElement;
export default LanAmpGuitarThin;
