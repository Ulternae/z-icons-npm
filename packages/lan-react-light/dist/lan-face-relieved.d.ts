import React from 'react';

export interface LanFaceRelievedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceRelieved(props: LanFaceRelievedProps): React.ReactElement;
export default LanFaceRelieved;
