import React from 'react';

export interface LanSheetPlasticProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheetPlastic: React.FC<LanSheetPlasticProps>;
export default LanSheetPlastic;
