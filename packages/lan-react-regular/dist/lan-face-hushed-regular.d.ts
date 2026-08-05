import React from 'react';

export interface LanFaceHushedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHushedRegular(props: LanFaceHushedRegularProps): React.ReactElement;
export default LanFaceHushedRegular;
