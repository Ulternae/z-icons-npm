import React from 'react';

export interface LanGlassesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassesThin(props: LanGlassesThinProps): React.ReactElement;
export default LanGlassesThin;
