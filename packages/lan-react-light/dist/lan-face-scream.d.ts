import React from 'react';

export interface LanFaceScreamProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceScream(props: LanFaceScreamProps): React.ReactElement;
export default LanFaceScream;
