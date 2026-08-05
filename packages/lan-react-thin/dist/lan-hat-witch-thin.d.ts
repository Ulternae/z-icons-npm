import React from 'react';

export interface LanHatWitchThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWitchThin(props: LanHatWitchThinProps): React.ReactElement;
export default LanHatWitchThin;
