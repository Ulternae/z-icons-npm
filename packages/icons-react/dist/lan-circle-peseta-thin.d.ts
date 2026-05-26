import React from 'react';

export interface LanCirclePesetaThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePesetaThin: React.FC<LanCirclePesetaThinProps>;
export default LanCirclePesetaThin;
