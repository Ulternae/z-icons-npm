import React from 'react';

export interface LanFaceScreamThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceScreamThin(props: LanFaceScreamThinProps): React.ReactElement;
export default LanFaceScreamThin;
