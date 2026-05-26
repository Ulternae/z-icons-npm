import React from 'react';

export interface LanCarPeopleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCarPeopleThin: React.FC<LanCarPeopleThinProps>;
export default LanCarPeopleThin;
