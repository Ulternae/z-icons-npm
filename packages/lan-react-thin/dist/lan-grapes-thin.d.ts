import React from 'react';

export interface LanGrapesThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGrapesThin(props: LanGrapesThinProps): React.ReactElement;
export default LanGrapesThin;
