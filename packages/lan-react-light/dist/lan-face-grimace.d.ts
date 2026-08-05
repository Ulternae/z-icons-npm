import React from 'react';

export interface LanFaceGrimaceProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceGrimace(props: LanFaceGrimaceProps): React.ReactElement;
export default LanFaceGrimace;
