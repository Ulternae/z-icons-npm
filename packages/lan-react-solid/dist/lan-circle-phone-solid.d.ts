import React from 'react';

export interface LanCirclePhoneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePhoneSolid(props: LanCirclePhoneSolidProps): React.ReactElement;
export default LanCirclePhoneSolid;
