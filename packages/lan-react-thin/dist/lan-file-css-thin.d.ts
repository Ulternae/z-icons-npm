import React from 'react';

export interface LanFileCssThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileCssThin(props: LanFileCssThinProps): React.ReactElement;
export default LanFileCssThin;
