import React from 'react';

export interface LanPlayProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanPlay(props: LanPlayProps): React.ReactElement;
export default LanPlay;
