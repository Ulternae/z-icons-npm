import React from 'react';

export interface LanCirclePlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePlay(props: LanCirclePlayProps): React.ReactElement;
export default LanCirclePlay;
