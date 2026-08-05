import React from 'react';

export interface LanCirclePhoneThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePhoneThin(props: LanCirclePhoneThinProps): React.ReactElement;
export default LanCirclePhoneThin;
