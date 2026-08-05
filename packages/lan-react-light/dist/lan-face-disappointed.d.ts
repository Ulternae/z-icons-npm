import React from 'react';

export interface LanFaceDisappointedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFaceDisappointed(props: LanFaceDisappointedProps): React.ReactElement;
export default LanFaceDisappointed;
