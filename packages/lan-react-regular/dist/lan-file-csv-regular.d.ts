import React from 'react';

export interface LanFileCsvRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCsvRegular(props: LanFileCsvRegularProps): React.ReactElement;
export default LanFileCsvRegular;
