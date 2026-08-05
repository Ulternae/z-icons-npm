import React from 'react';

export interface LanFaceAnguishedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceAnguished(props: LanFaceAnguishedProps): React.ReactElement;
export default LanFaceAnguished;
