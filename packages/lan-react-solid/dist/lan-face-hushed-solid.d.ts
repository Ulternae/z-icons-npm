import React from 'react';

export interface LanFaceHushedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceHushedSolid(props: LanFaceHushedSolidProps): React.ReactElement;
export default LanFaceHushedSolid;
