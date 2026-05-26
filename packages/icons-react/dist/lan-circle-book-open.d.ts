import React from 'react';

export interface LanCircleBookOpenProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCircleBookOpen: React.FC<LanCircleBookOpenProps>;
export default LanCircleBookOpen;
