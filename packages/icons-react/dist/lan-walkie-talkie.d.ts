import React from 'react';

export interface LanWalkieTalkieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkieTalkie: React.FC<LanWalkieTalkieProps>;
export default LanWalkieTalkie;
