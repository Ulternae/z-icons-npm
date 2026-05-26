import React from 'react';

export interface LanWalkieTalkieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWalkieTalkieThin: React.FC<LanWalkieTalkieThinProps>;
export default LanWalkieTalkieThin;
