import React from 'react';

export interface LanListTreeThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanListTreeThin: React.FC<LanListTreeThinProps>;
export default LanListTreeThin;
