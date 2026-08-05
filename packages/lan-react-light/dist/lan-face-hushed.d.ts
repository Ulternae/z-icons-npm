import React from 'react';

export interface LanFaceHushedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHushed(props: LanFaceHushedProps): React.ReactElement;
export default LanFaceHushed;
