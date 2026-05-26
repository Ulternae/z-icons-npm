import React from 'react';

export interface LanSheetPlasticSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSheetPlasticSolid: React.FC<LanSheetPlasticSolidProps>;
export default LanSheetPlasticSolid;
