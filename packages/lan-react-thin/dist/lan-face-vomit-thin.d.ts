import React from 'react';

export interface LanFaceVomitThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceVomitThin(props: LanFaceVomitThinProps): React.ReactElement;
export default LanFaceVomitThin;
