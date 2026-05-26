import React from 'react';

export interface LanFilePlusMinusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilePlusMinusThin: React.FC<LanFilePlusMinusThinProps>;
export default LanFilePlusMinusThin;
