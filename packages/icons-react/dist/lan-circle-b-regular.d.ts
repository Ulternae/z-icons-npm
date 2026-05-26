import React from 'react';

export interface LanCircleBRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBRegular: React.FC<LanCircleBRegularProps>;
export default LanCircleBRegular;
