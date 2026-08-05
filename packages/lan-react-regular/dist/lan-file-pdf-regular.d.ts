import React from 'react';

export interface LanFilePdfRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePdfRegular(props: LanFilePdfRegularProps): React.ReactElement;
export default LanFilePdfRegular;
