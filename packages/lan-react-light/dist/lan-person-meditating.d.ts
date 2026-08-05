import React from 'react';

export interface LanPersonMeditatingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPersonMeditating(props: LanPersonMeditatingProps): React.ReactElement;
export default LanPersonMeditating;
