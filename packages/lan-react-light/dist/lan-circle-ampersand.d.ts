import React from 'react';

export interface LanCircleAmpersandProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleAmpersand(props: LanCircleAmpersandProps): React.ReactElement;
export default LanCircleAmpersand;
