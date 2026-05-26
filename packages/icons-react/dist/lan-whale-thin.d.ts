import React from 'react';

export interface LanWhaleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanWhaleThin: React.FC<LanWhaleThinProps>;
export default LanWhaleThin;
