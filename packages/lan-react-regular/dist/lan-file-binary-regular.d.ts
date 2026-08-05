import React from 'react';

export interface LanFileBinaryRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileBinaryRegular(props: LanFileBinaryRegularProps): React.ReactElement;
export default LanFileBinaryRegular;
