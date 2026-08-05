import React from 'react';

export interface LanFaceGrinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrin(props: LanFaceGrinProps): React.ReactElement;
export default LanFaceGrin;
