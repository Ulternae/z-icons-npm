import React from 'react';

export interface LanSheetPlasticThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheetPlasticThin: React.FC<LanSheetPlasticThinProps>;
export default LanSheetPlasticThin;
