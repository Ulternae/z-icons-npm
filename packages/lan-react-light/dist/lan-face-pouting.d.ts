import React from 'react';

export interface LanFacePoutingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFacePouting(props: LanFacePoutingProps): React.ReactElement;
export default LanFacePouting;
