import React from 'react';

export interface LanFaceMonocleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMonocle(props: LanFaceMonocleProps): React.ReactElement;
export default LanFaceMonocle;
