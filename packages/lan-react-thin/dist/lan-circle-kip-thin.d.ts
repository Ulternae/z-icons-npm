import React from 'react';

export interface LanCircleKipThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleKipThin(props: LanCircleKipThinProps): React.ReactElement;
export default LanCircleKipThin;
