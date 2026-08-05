import React from 'react';

export interface LanTypewriterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanTypewriterSolid(props: LanTypewriterSolidProps): React.ReactElement;
export default LanTypewriterSolid;
