import React from 'react';

export interface LanFaceMonocleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceMonocleThin(props: LanFaceMonocleThinProps): React.ReactElement;
export default LanFaceMonocleThin;
