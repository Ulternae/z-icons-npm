import React from 'react';

export interface LanDownToDottedLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDownToDottedLineSolid(props: LanDownToDottedLineSolidProps): React.ReactElement;
export default LanDownToDottedLineSolid;
