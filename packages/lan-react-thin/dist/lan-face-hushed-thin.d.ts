import React from 'react';

export interface LanFaceHushedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHushedThin(props: LanFaceHushedThinProps): React.ReactElement;
export default LanFaceHushedThin;
