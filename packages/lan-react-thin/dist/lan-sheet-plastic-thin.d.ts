import React from 'react';

export interface LanSheetPlasticThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheetPlasticThin(props: LanSheetPlasticThinProps): React.ReactElement;
export default LanSheetPlasticThin;
