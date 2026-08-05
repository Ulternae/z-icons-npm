import React from 'react';

export interface LanUpToDottedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUpToDottedLineSolid(props: LanUpToDottedLineSolidProps): React.ReactElement;
export default LanUpToDottedLineSolid;
