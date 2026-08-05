import React from 'react';

export interface LanToggleOffProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanToggleOff(props: LanToggleOffProps): React.ReactElement;
export default LanToggleOff;
