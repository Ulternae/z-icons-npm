import React from 'react';

export interface LanFaceConfusedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceConfused(props: LanFaceConfusedProps): React.ReactElement;
export default LanFaceConfused;
