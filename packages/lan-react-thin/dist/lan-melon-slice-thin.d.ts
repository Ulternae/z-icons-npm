import React from 'react';

export interface LanMelonSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMelonSliceThin(props: LanMelonSliceThinProps): React.ReactElement;
export default LanMelonSliceThin;
