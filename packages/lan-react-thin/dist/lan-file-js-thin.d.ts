import React from 'react';

export interface LanFileJsThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileJsThin(props: LanFileJsThinProps): React.ReactElement;
export default LanFileJsThin;
