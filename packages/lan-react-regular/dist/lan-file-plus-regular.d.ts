import React from 'react';

export interface LanFilePlusRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusRegular(props: LanFilePlusRegularProps): React.ReactElement;
export default LanFilePlusRegular;
