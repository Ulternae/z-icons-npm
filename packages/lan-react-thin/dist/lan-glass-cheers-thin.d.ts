import React from 'react';

export interface LanGlassCheersThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassCheersThin(props: LanGlassCheersThinProps): React.ReactElement;
export default LanGlassCheersThin;
