import React from 'react';

export interface LanPersonPregnantProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonPregnant(props: LanPersonPregnantProps): React.ReactElement;
export default LanPersonPregnant;
