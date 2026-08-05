import React from 'react';

export interface LanFaceKissThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceKissThin(props: LanFaceKissThinProps): React.ReactElement;
export default LanFaceKissThin;
