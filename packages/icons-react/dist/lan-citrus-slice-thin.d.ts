import React from 'react';

export interface LanCitrusSliceThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCitrusSliceThin: React.FC<LanCitrusSliceThinProps>;
export default LanCitrusSliceThin;
