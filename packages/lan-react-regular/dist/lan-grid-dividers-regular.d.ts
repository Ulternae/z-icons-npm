import React from 'react';

export interface LanGridDividersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGridDividersRegular(props: LanGridDividersRegularProps): React.ReactElement;
export default LanGridDividersRegular;
