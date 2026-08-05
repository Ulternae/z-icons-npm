import React from 'react';

export interface LanMugTeaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMugTeaThin(props: LanMugTeaThinProps): React.ReactElement;
export default LanMugTeaThin;
