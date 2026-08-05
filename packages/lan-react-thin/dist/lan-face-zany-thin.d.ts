import React from 'react';

export interface LanFaceZanyThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceZanyThin(props: LanFaceZanyThinProps): React.ReactElement;
export default LanFaceZanyThin;
