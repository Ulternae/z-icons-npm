import React from 'react';

export interface LanFilePptRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePptRegular(props: LanFilePptRegularProps): React.ReactElement;
export default LanFilePptRegular;
