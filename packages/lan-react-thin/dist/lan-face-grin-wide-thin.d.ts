import React from 'react';

export interface LanFaceGrinWideThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrinWideThin(props: LanFaceGrinWideThinProps): React.ReactElement;
export default LanFaceGrinWideThin;
