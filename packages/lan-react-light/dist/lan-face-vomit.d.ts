import React from 'react';

export interface LanFaceVomitProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceVomit(props: LanFaceVomitProps): React.ReactElement;
export default LanFaceVomit;
