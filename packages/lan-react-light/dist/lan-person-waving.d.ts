import React from 'react';

export interface LanPersonWavingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonWaving(props: LanPersonWavingProps): React.ReactElement;
export default LanPersonWaving;
