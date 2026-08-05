import React from 'react';

export interface LanGlassThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassThin(props: LanGlassThinProps): React.ReactElement;
export default LanGlassThin;
