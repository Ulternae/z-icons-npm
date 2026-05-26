import React from 'react';

export interface LanSheetPlasticRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheetPlasticRegular: React.FC<LanSheetPlasticRegularProps>;
export default LanSheetPlasticRegular;
