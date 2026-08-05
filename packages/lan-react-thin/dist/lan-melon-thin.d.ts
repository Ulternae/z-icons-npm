import React from 'react';

export interface LanMelonThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonThin(props: LanMelonThinProps): React.ReactElement;
export default LanMelonThin;
