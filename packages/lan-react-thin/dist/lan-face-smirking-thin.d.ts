import React from 'react';

export interface LanFaceSmirkingThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSmirkingThin(props: LanFaceSmirkingThinProps): React.ReactElement;
export default LanFaceSmirkingThin;
