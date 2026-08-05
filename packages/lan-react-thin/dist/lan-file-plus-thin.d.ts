import React from 'react';

export interface LanFilePlusThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFilePlusThin(props: LanFilePlusThinProps): React.ReactElement;
export default LanFilePlusThin;
