import React from 'react';

export interface LanFilePowerpointRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePowerpointRegular(props: LanFilePowerpointRegularProps): React.ReactElement;
export default LanFilePowerpointRegular;
