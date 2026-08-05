import React from 'react';

export interface LanMagnifyingGlassPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassPlay(props: LanMagnifyingGlassPlayProps): React.ReactElement;
export default LanMagnifyingGlassPlay;
