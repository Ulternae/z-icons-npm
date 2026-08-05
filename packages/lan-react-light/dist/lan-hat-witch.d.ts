import React from 'react';

export interface LanHatWitchProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHatWitch(props: LanHatWitchProps): React.ReactElement;
export default LanHatWitch;
