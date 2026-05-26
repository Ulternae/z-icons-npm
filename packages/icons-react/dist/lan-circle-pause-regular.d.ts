import React from 'react';

export interface LanCirclePauseRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCirclePauseRegular: React.FC<LanCirclePauseRegularProps>;
export default LanCirclePauseRegular;
