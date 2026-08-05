import React from 'react';

export interface LanBrightnessThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBrightnessThin(props: LanBrightnessThinProps): React.ReactElement;
export default LanBrightnessThin;
