import React from 'react';

export interface LanGlassEmptyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGlassEmpty(props: LanGlassEmptyProps): React.ReactElement;
export default LanGlassEmpty;
