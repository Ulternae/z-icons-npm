import React from 'react';

export interface LanFaceWorriedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceWorried(props: LanFaceWorriedProps): React.ReactElement;
export default LanFaceWorried;
