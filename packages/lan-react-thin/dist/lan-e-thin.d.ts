import React from 'react';

export interface LanEThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanEThin(props: LanEThinProps): React.ReactElement;
export default LanEThin;
