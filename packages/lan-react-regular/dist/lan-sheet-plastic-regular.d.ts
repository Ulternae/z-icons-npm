import React from 'react';

export interface LanSheetPlasticRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanSheetPlasticRegular(props: LanSheetPlasticRegularProps): React.ReactElement;
export default LanSheetPlasticRegular;
