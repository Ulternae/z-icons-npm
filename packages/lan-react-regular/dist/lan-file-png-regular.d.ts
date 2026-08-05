import React from 'react';

export interface LanFilePngRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePngRegular(props: LanFilePngRegularProps): React.ReactElement;
export default LanFilePngRegular;
