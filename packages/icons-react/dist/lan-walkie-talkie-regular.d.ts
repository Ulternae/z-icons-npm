import React from 'react';

export interface LanWalkieTalkieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkieTalkieRegular: React.FC<LanWalkieTalkieRegularProps>;
export default LanWalkieTalkieRegular;
