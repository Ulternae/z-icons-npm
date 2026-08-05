import React from 'react';

export interface LanFaceSwearProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceSwear(props: LanFaceSwearProps): React.ReactElement;
export default LanFaceSwear;
