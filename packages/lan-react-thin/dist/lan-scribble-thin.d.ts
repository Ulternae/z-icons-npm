import React from 'react';

export interface LanScribbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanScribbleThin(props: LanScribbleThinProps): React.ReactElement;
export default LanScribbleThin;
