import React from 'react';

export interface LanFaceSmileProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmile(props: LanFaceSmileProps): React.ReactElement;
export default LanFaceSmile;
