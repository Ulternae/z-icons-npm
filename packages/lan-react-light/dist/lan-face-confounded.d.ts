import React from 'react';

export interface LanFaceConfoundedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceConfounded(props: LanFaceConfoundedProps): React.ReactElement;
export default LanFaceConfounded;
