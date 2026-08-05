import React from 'react';

export interface LanFaceWearyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWeary(props: LanFaceWearyProps): React.ReactElement;
export default LanFaceWeary;
