import React from 'react';

export interface LanCirclePauseProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePause: React.FC<LanCirclePauseProps>;
export default LanCirclePause;
