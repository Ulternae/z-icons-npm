import React from 'react';

export interface LanBookAtlasThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookAtlasThin(props: LanBookAtlasThinProps): React.ReactElement;
export default LanBookAtlasThin;
