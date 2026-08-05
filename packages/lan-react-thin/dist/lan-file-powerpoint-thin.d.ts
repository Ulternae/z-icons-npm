import React from 'react';

export interface LanFilePowerpointThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePowerpointThin(props: LanFilePowerpointThinProps): React.ReactElement;
export default LanFilePowerpointThin;
