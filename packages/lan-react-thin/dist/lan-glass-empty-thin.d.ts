import React from 'react';

export interface LanGlassEmptyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassEmptyThin(props: LanGlassEmptyThinProps): React.ReactElement;
export default LanGlassEmptyThin;
