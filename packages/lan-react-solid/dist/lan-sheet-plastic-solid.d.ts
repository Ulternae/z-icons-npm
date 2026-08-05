import React from 'react';

export interface LanSheetPlasticSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheetPlasticSolid(props: LanSheetPlasticSolidProps): React.ReactElement;
export default LanSheetPlasticSolid;
