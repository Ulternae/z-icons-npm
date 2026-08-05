import React from 'react';

export interface LanSheetPlasticProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheetPlastic(props: LanSheetPlasticProps): React.ReactElement;
export default LanSheetPlastic;
